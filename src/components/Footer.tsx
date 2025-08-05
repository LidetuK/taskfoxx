import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="https://res.cloudinary.com/dmidrozoq/image/upload/v1754418224/Screenshot_2025-08-04_215552_ucltmc-removebg-preview_zbmwxj.png" 
              alt="TaskFOXX Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Your trusted platform for connecting with skilled professionals across Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">📘</a>
              <a href="#" className="text-gray-400 hover:text-white">📱</a>
              <a href="#" className="text-gray-400 hover:text-white">📷</a>
              <a href="#" className="text-gray-400 hover:text-white">🐦</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FF6B35]">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/home" className="text-gray-300 hover:text-white">Home Services</Link></li>
              <li><Link to="/services/digital" className="text-gray-300 hover:text-white">Digital Services</Link></li>
              <li><Link to="/services/events" className="text-gray-300 hover:text-white">Events</Link></li>
              <li><Link to="/services/transport" className="text-gray-300 hover:text-white">Transport</Link></li>
              <li><Link to="/services/education" className="text-gray-300 hover:text-white">Education</Link></li>
              <li><Link to="/services/business" className="text-gray-300 hover:text-white">Business</Link></li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FF6B35]">For Providers</h3>
            <ul className="space-y-3">
              <li><Link to="/provider/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
              <li><Link to="/provider/tasks" className="text-gray-300 hover:text-white">Find Tasks</Link></li>
              <li><Link to="/provider/bids" className="text-gray-300 hover:text-white">My Bids</Link></li>
              <li><Link to="/provider/earnings" className="text-gray-300 hover:text-white">Earnings</Link></li>
              <li><Link to="/provider/verification" className="text-gray-300 hover:text-white">Get Verified</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FF6B35]">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Popular Cities & Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FF6B35]">Popular Cities</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/services/accra" className="text-gray-300 hover:text-white">Accra</Link>
              <Link to="/services/kumasi" className="text-gray-300 hover:text-white">Kumasi</Link>
              <Link to="/services/takoradi" className="text-gray-300 hover:text-white">Takoradi</Link>
              <Link to="/services/tamale" className="text-gray-300 hover:text-white">Tamale</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FF6B35]">Popular Services</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/services/furniture-assembly" className="text-gray-300 hover:text-white">Furniture Assembly</Link>
              <Link to="/services/cleaning" className="text-gray-300 hover:text-white">House Cleaning</Link>
              <Link to="/services/moving" className="text-gray-300 hover:text-white">Moving Help</Link>
              <Link to="/services/electrical" className="text-gray-300 hover:text-white">Electrical Work</Link>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 TaskFOXX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 