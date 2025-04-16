import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiUser, FiList, FiLogOut } from 'react-icons/fi';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useCart } from '@/modules/cart/context/CartContext';

export default function Header() {
  const { user, signOut } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512" 
                alt="Food Khao" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-[#484848] text-lg font-bold">Food Khao</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-[#484848] hover:text-[#FF5A5F] transition-colors">
              <FiShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5A5F] text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="relative group">
                <button className="p-2 text-[#484848] hover:text-[#FF5A5F] transition-colors cursor-pointer">
                  <FiUser size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-[#484848] border-b border-gray-100">
                    Signed in as<br/>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-[#484848] hover:bg-[#F7F7F7] transition-colors"
                  >
                    <FiUser className="inline mr-2" /> Profile
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block px-4 py-2 text-sm text-[#484848] hover:bg-[#F7F7F7] transition-colors"
                  >
                    <FiList className="inline mr-2" /> Orders
                  </Link>
                  <button 
                    onClick={handleSignOut} 
                    className="block w-full text-left px-4 py-2 text-sm text-[#484848] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
                  >
                    <FiLogOut className="inline mr-2" /> Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-sm font-medium text-[#FF5A5F] hover:text-[#FF4247] transition-colors"
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}