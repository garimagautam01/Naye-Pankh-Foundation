import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const location = useLocation(); // To determine the current path

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Transaction', path: '/transaction' },
    { name: 'Start Here', path: '/start-here' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Learning Modules', path: '/learning-modules' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Feedback', path: '/feedback' },
  ];

  return (
    <div>
      <div className='w-48 ht-screen mt-20 ml-4 '>
        <ul className="font-bold gap-2 flex flex-col ">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`rounded-lg  block px-4 py-4 hover:bg-red-100 hover:text-red-600 ${
                  location.pathname === link.path ? 'bg-red-500 text-white' : 'text-black'
                } transition-colors duration-150`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
