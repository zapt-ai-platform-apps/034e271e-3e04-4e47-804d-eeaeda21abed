import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCheckCircle, FiPackage } from 'react-icons/fi';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

// Mock order data
const mockOrders = [
  {
    id: '1001',
    restaurantName: 'Burger Palace',
    total: 24.97,
    date: '2023-06-15T18:30:00',
    status: 'delivered',
    items: [
      { name: 'Classic Cheeseburger', quantity: 2 },
      { name: 'French Fries', quantity: 1 }
    ]
  },
  {
    id: '1002',
    restaurantName: 'Pizza Express',
    total: 32.50,
    date: '2023-06-10T19:45:00',
    status: 'delivered',
    items: [
      { name: 'Margherita Pizza', quantity: 1 },
      { name: 'Pepperoni Pizza', quantity: 1 }
    ]
  },
  {
    id: '1003',
    restaurantName: 'Sushi World',
    total: 45.75,
    date: '2023-06-05T20:15:00',
    status: 'delivered',
    items: [
      { name: 'California Roll', quantity: 2 },
      { name: 'Salmon Nigiri', quantity: 4 }
    ]
  }
];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching orders
    const timer = setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="py-8 flex flex-col items-center justify-center">
        <FiPackage size={64} className="text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold text-[#484848] mb-2">No orders yet</h2>
        <p className="text-[#767676] mb-6">Place your first order to get started</p>
        <Link to="/" className="btn-primary">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-[#484848] mb-6">Your Orders</h1>
      
      <div className="space-y-4">
        {orders.map(order => (
          <Link 
            key={order.id} 
            to={`/orders/${order.id}`}
            className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-medium text-[#484848]">{order.restaurantName}</h2>
              <div className="flex items-center text-sm">
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
            
            <div className="text-sm text-[#767676] mb-2">
              <p>Order #{order.id}</p>
              <p>{new Date(order.date).toLocaleString()}</p>
            </div>
            
            <div className="text-sm text-[#767676]">
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.quantity}x {item.name}
                  {index < order.items.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
            
            <div className="mt-3 flex justify-between items-center">
              <span className="font-medium text-[#484848]">${order.total.toFixed(2)}</span>
              <span className="text-[#FF5A5F] text-sm">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}