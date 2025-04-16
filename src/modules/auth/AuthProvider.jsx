import React, { createContext, useEffect, useState, useRef } from 'react';
import { supabase, recordLogin } from '@/supabaseClient';
import * as Sentry from '@sentry/browser';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasRecordedLogin, setHasRecordedLogin] = useState(false);
  const hasSessionRef = useRef(false);

  // Update session and session ref
  const updateSession = (newSession) => {
    setSession(newSession);
    hasSessionRef.current = newSession !== null;
  };

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }

        updateSession(data.session);
        setUser(data.session?.user || null);
        if (data.session) {
          hasSessionRef.current = true;
        }
        setLoading(false);
      } catch (error) {
        console.error('Error checking session:', error);
        Sentry.captureException(error);
        setLoading(false);
      }
    };

    checkSession();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log('Auth event:', event, 'Has session:', hasSessionRef.current);
      
      if (event === 'SIGNED_IN') {
        if (!hasSessionRef.current) {
          updateSession(newSession);
          setUser(newSession?.user || null);
          setHasRecordedLogin(false);
        } else {
          console.log('Already have session, ignoring SIGNED_IN event');
        }
      } else if (event === 'TOKEN_REFRESHED') {
        updateSession(newSession);
        setUser(newSession?.user || null);
      } else if (event === 'SIGNED_OUT') {
        updateSession(null);
        setUser(null);
        setHasRecordedLogin(false);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Record login in a separate effect
  useEffect(() => {
    const recordUserLogin = async () => {
      if (session?.user?.email && !hasRecordedLogin) {
        try {
          await recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV);
          setHasRecordedLogin(true);
        } catch (error) {
          console.error('Failed to record login:', error);
          Sentry.captureException(error);
        }
      }
    };

    recordUserLogin();
  }, [session, hasRecordedLogin]);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
      Sentry.captureException(error);
      throw error;
    }
  };

  const value = {
    user,
    session,
    loading,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}