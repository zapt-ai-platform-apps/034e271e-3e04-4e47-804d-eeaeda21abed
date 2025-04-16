import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useCart } from '@/modules/cart/context/CartContext';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';

export default function Header() {
  const { user, signOut } = useAuth();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#FF5A5F] flex items-center">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
            alt="Food Khao Logo" 
            className="w-8 h-8 mr-2" 
          />
          Food Khao
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#484848] cursor-pointer" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-[#484848] hover:text-[#FF5A5F] transition-colors">Home</Link>
          {user && (
            <Link to="/orders" className="text-[#484848] hover:text-[#FF5A5F] transition-colors">My Orders</Link>
          )}
          <Link to="/cart" className="text-[#484848] hover:text-[#FF5A5F] transition-colors relative">
            <FiShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FF5A5F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <div className="relative group">
              <button className="text-[#484848] hover:text-[#FF5A5F] transition-colors flex items-center cursor-pointer">
                <FiUser size={20} className="mr-1" />
                <span className="max-w-[100px] truncate">{user.email?.split('@')[0]}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                <Link to="/profile" className="block px-4 py-2 text-[#484848] hover:bg-[#F7F7F7]">Profile</Link>
                <button 
                  onClick={handleSignOut} 
                  className="w-full text-left px-4 py-2 text-[#484848] hover:bg-[#F7F7F7] flex items-center cursor-pointer"
                >
                  <FiLogOut size={16} className="mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">Sign In</Link>
          )}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full z-20">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="py-2 text-[#484848]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {user && (
              <Link 
                to="/orders" 
                className="py-2 text-[#484848]"
                onClick={() => setIsMenuOpen(false)}
              >
                My Orders
              </Link>
            )}
            <Link 
              to="/cart" 
              className="py-2 text-[#484848] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiShoppingCart size={20} className="mr-2" />
              Cart
              {totalItems > 0 && (
                <span className="ml-2 bg-[#FF5A5F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="py-2 text-[#484848] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUser size={20} className="mr-2" />
                  Profile
                </Link>
                <button 
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }} 
                  className="py-2 text-[#484848] flex items-center cursor-pointer"
                >
                  <FiLogOut size={20} className="mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}