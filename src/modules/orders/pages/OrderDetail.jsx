import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiClock, FiMapPin } from 'react-icons/fi';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

// Mock order detail
const mockOrderDetails = {
  '1001': {
    id: '1001',
    restaurantName: 'Burger Palace',
    restaurantAddress: '123 Main St, New York, NY 10001',
    customerAddress: '456 Park Ave, New York, NY 10022',
    total: 24.97,
    subtotal: 19.98,
    deliveryFee: 2.99,
    tax: 2.00,
    date: '2023-06-15T18:30:00',
    status: 'delivered',
    items: [
      { name: 'Classic Cheeseburger', price: 8.99, quantity: 2 },
      { name: 'French Fries', price: 3.99, quantity: 1 }
    ]
  },
  '1002': {
    id: '1002',
    restaurantName: 'Pizza Express',
    restaurantAddress: '789 Broadway, New York, NY 10003',
    customerAddress: '456 Park Ave, New York, NY 10022',
    total: 32.50,
    subtotal: 27.98,
    deliveryFee: 2.99,
    tax: 1.53,
    date: '2023-06-10T19:45:00',
    status: 'delivered',
    items: [
      { name: 'Margherita Pizza', price: 12.99, quantity: 1 },
      { name: 'Pepperoni Pizza', price: 14.99, quantity: 1 }
    ]
  },
  '1003': {
    id: '1003',
    restaurantName: 'Sushi World',
    restaurantAddress: '456 5th Ave, New York, NY 10018',
    customerAddress: '456 Park Ave, New York, NY 10022',
    total: 45.75,
    subtotal: 39.96,
    deliveryFee: 2.99,
    tax: 2.80,
    date: '2023-06-05T20:15:00',
    status: 'delivered',
    items: [
      { name: 'California Roll', price: 8.99, quantity: 2 },
      { name: 'Salmon Nigiri', price: 5.50, quantity: 4 }
    ]
  }
};

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setOrder(mockOrderDetails[id]);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-[#484848] mb-4">Order not found</h2>
        <Link to="/orders" className="text-[#FF5A5F] font-medium">
          Back to orders
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(order.date).toLocaleString();

  return (
    <div className="py-6">
      <Link to="/orders" className="inline-flex items-center text-[#484848] hover:text-[#FF5A5F] mb-4">
        <FiArrowLeft className="mr-1" /> Back to orders
      </Link>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="border-b border-gray-200 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold text-[#484848]">Order #{order.id}</h1>
              <p className="text-[#767676] text-sm">{formattedDate}</p>
            </div>
            <div className="flex items-center">
              {order.status === 'delivered' ? (
                <span className="flex items-center text-green-600">
                  <FiCheckCircle className="mr-1" /> Delivered
                </span>
              ) : (
                <span className="flex items-center text-orange-500">
                  <FiClock className="mr-1" /> In Progress
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="font-medium text-[#484848] mb-2">Order Items</h2>
          <div className="space-y-2 mb-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#484848]">
                  {item.quantity}x {item.name}
                </span>
                <span className="text-[#484848]">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-[#767676]">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#767676]">
                <span>Delivery Fee</span>
                <span>${order.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#767676]">
                <span>Tax</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-medium text-[#484848]">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-medium text-[#484848] mb-4">Delivery Information</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="flex items-center text-[#767676] text-sm font-medium mb-1">
              <FiMapPin className="mr-1" /> Restaurant
            </h3>
            <p className="text-[#484848]">{order.restaurantName}</p>
            <p className="text-[#767676] text-sm">{order.restaurantAddress}</p>
          </div>
          
          <div>
            <h3 className="flex items-center text-[#767676] text-sm font-medium mb-1">
              <FiMapPin className="mr-1" /> Delivery Address
            </h3>
            <p className="text-[#484848]">{order.customerAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}