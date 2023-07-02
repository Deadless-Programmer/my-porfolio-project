import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 ">
      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl animate-charcter">Tuhin</a>
            </div>
           <div className='ml-64'>
           <div className="hidden  md:block">
              <div className="ml-20 flex  justify-center space-x-4">
                <Link to="/" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/blog" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <Link to="/about" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/project" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                <Link to="/contact" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
           </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/project" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
