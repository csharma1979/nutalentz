import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../common/Logo';
import ServicesDropdown from './ServicesDropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <ServicesDropdown />
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              {/* Mobile Services Links */}
              <div className="px-3 py-2 space-y-1">
                <div className="font-medium text-gray-700">Services</div>
                <Link to="/services/staffing" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Staffing & Recruitment</Link>
                <Link to="/services/training" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Training & Development</Link>
                <Link to="/services/consulting" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Strategy Consulting</Link>
                <Link to="/services/managed-services" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Managed Services</Link>
                <Link to="/services/data-services" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Data Entry & Processing</Link>
                <Link to="/services/personnel" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Personnel Services</Link>
                <Link to="/services/financial" className="block pl-4 py-1 text-sm text-gray-600 hover:text-blue-600">Financial Services</Link>
              </div>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  );
};

export default Header;