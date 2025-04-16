import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-[#FF5A5F] flex items-center">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
                alt="Food Khao Logo" 
                className="w-8 h-8 mr-2" 
              />
              Food Khao
            </Link>
            <p className="mt-3 text-gray-600 text-sm">
              Delivering your favorite food to your doorstep.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#FF5A5F]">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF5A5F]">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF5A5F]">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
            <div className="mt-4 space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">About Us</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Careers</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Contact Us</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Partner With Us</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Legal</h3>
            <div className="mt-4 space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Terms & Conditions</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Privacy Policy</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Refund Policy</Link>
              <Link to="/" className="block text-gray-600 hover:text-[#FF5A5F] text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Food Khao. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.zapt.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#FF5A5F] text-sm"
            >
              Made on ZAPT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}