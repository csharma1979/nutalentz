import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

const services = [
  {
    title: "Staffing & Recruitment",
    path: "/services/staffing",
    description: "Expert talent acquisition and placement services"
  },
  {
    title: "Training & Development",
    path: "/services/training",
    description: "Comprehensive skill enhancement programs"
  },
  {
    title: "Strategy Consulting",
    path: "/services/consulting",
    description: "Professional business growth guidance"
  },
  {
    title: "Managed Services",
    path: "/services/managed-services",
    description: "End-to-end process management"
  },
  {
    title: "Data Entry & Processing",
    path: "/services/data-services",
    description: "Accurate data handling and reporting"
  },
  {
    title: "Personnel Services",
    path: "/services/personnel",
    description: "Complete HR solutions"
  },
  {
    title: "Financial Services",
    path: "/services/financial",
    description: "Comprehensive accounting solutions"
  }
];

const ServicesDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <Menu.Button className="inline-flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md hover:bg-gray-50">
        Services
        <HiChevronDown className="ml-1 h-4 w-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-72 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-2">
            {services.map((service) => (
              <Menu.Item key={service.path}>
                {({ active }) => (
                  <Link
                    to={service.path}
                    className={`${
                      active ? 'bg-gray-50' : ''
                    } block px-4 py-3 hover:bg-gray-50 transition-colors`}
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {service.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.description}
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ServicesDropdown;