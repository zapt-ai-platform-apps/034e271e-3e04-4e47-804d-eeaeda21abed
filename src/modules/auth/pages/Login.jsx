import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/supabaseClient';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user && !loading) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=80&height=80"
            alt="Food Khao Logo" 
            className="w-16 h-16 mb-2" 
          />
          <h1 className="text-2xl font-bold text-[#484848]">Welcome to Food Khao</h1>
          <p className="text-[#767676] text-sm mt-1">Sign in to order your favorite food</p>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-[#484848] font-medium">Sign in with ZAPT</p>
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-[#767676] hover:text-[#484848]"
          >
            Learn more about ZAPT
          </a>
        </div>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#FF5A5F',
                  brandAccent: '#FF4247',
                }
              }
            }
          }}
          providers={['google', 'facebook', 'apple']}
          magicLink={true}
          view="magic_link"
        />
      </div>
    </div>
  );
}