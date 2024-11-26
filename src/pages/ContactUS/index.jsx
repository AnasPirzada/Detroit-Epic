import { useState } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const index = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <>
        {/* Hamburger Icon */}
        <div className='absolute left-5 top-20'>
          <button
            // onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className='text-gray-800 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute top-32 left-0 w-full bg-white shadow-md rounded-lg mt-2 md:w-auto'>
            <ul className='flex flex-col'>
              <li>
                <Link
                  to='/user-profile'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  User Profile{' '}
                </Link>
              </li>
              <li>
                <Link to='/about' className='block px-4 py-2 hover:bg-gray-100'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy-policy'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Privacy
                </Link>
              </li>{' '}
              <li>
                <Link
                  to='/terms-and-conditions'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Terms
                </Link>
              </li>{' '}
              <li>
                <Link to='/guide' className='block px-4 py-2 hover:bg-gray-100'>
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/work' className='block px-4 py-2 hover:bg-gray-100'>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>

      <div className='bg-gray-50 min-h-screen py-12 px-4 sm:px-12 lg:px-24'>
        <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
          Contact Us
        </h1>
        <div className='bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center text-gray-600'>
            <FaEnvelope className='w-6 h-6 text-blue-500 mr-4' />
            <span className='text-lg'>
              Email: support@detroitepicweekend.com
            </span>
          </div>
          <div className='flex items-center text-gray-600'>
            <FaPhone className='w-6 h-6 text-green-500 mr-4' />
            <span className='text-lg'>Phone: (123) 456-7890</span>
          </div>
          <div className='text-gray-600 space-y-4'>
            <p>Follow us on social media for updates and exclusive offers:</p>
            <div className='flex space-x-4'>
              <FaFacebook className='w-6 h-6 text-blue-800 hover:text-blue-600 cursor-pointer' />
              <FaTwitter className='w-6 h-6 text-blue-400 hover:text-blue-200 cursor-pointer' />
              <FaInstagram className='w-6 h-6 text-pink-500 hover:text-pink-300 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
