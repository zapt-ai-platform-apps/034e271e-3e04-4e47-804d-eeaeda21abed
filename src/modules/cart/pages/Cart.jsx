import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronRight, FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      navigate('/login', { state: { from: '/cart' } });
      return;
    }

    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      clearCart();
      navigate('/orders');
      setIsProcessing(false);
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-8 flex flex-col items-center justify-center">
        <FiShoppingBag size={64} className="text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold text-[#484848] mb-2">Your cart is empty</h2>
        <p className="text-[#767676] mb-6">Add items from restaurants to get started</p>
        <Link to="/" className="btn-primary">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  const restaurantName = cartItems[0]?.restaurantName || 'Restaurant';
  const subtotal = getCartTotal();
  const deliveryFee = 2.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-[#484848] mb-6">Your Cart</h1>
      
      <div className="md:flex md:space-x-6">
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#484848]">Order from {restaurantName}</h2>
              <button 
                onClick={clearCart}
                className="text-[#FF5A5F] text-sm font-medium flex items-center cursor-pointer"
              >
                <FiTrash2 className="mr-1" /> Clear Cart
              </button>
            </div>
            
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 shrink-0 mr-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-[#484848]">{item.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border border-gray-200 rounded text-[#484848] cursor-pointer"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="mx-2 w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border border-gray-200 rounded text-[#484848] cursor-pointer"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-medium mr-3">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#FF5A5F] cursor-pointer"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
            <h2 className="text-lg font-medium text-[#484848] mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-[#484848]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#484848]">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#484848]">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-medium text-[#484848]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={isProcessing}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isProcessing ? (
                <span className="loader mr-2"></span>
              ) : (
                <FiChevronRight className="mr-2" />
              )}
              {isProcessing ? 'Processing...' : 'Checkout'}
            </button>
            
            <Link to="/" className="block text-center mt-4 text-[#484848] text-sm hover:text-[#FF5A5F]">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}