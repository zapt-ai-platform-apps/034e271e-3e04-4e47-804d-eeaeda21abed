import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/modules/auth/AuthProvider';
import ProtectedRoute from '@/modules/auth/ProtectedRoute';
import Layout from '@/modules/core/layout/Layout';
import Home from '@/modules/restaurants/pages/Home';
import RestaurantDetail from '@/modules/restaurants/pages/RestaurantDetail';
import Cart from '@/modules/cart/pages/Cart';
import Orders from '@/modules/orders/pages/Orders';
import OrderDetail from '@/modules/orders/pages/OrderDetail';
import Profile from '@/modules/user/pages/Profile';
import Login from '@/modules/auth/pages/Login';
import { CartProvider } from '@/modules/cart/context/CartContext';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              } />
              <Route path="/orders/:id" element={
                <ProtectedRoute>
                  <OrderDetail />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="zapt-badge">
            Made on ZAPT
          </a>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}