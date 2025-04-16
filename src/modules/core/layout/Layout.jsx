import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow px-4 py-6 md:px-6 lg:px-8 container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}