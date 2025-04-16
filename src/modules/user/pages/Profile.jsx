import React, { useState } from 'react';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { FiUser, FiMail, FiLogOut } from 'react-icons/fi';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

export default function Profile() {
  const { user, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      setIsSigningOut(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-[#484848] mb-6">Your Profile</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-[#F7F7F7] rounded-full flex items-center justify-center text-[#767676]">
            <FiUser size={32} />
          </div>
          <div className="ml-4">
            <h2 className="font-medium text-[#484848]">
              {user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}
            </h2>
            <p className="text-[#767676] text-sm">Member since {new Date(user.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-[#767676] mb-1">Email</h3>
            <div className="flex items-center text-[#484848]">
              <FiMail className="mr-2 text-[#767676]" />
              {user.email}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="font-medium text-[#484848] mb-4">Account Settings</h2>
        
        <button 
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="flex items-center text-[#FF5A5F] hover:text-[#FF4247] transition-colors cursor-pointer"
        >
          {isSigningOut ? (
            <LoadingSpinner size="small" className="mr-2" />
          ) : (
            <FiLogOut className="mr-2" />
          )}
          {isSigningOut ? 'Signing Out...' : 'Sign Out'}
        </button>
      </div>
    </div>
  );
}