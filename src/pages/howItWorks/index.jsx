import { useState } from 'react';
import {
  FaClipboardCheck,
  FaRocket,
  FaSearch,
  FaThumbsUp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function HowItWorks() {
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

      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold mb-4 text-gray-800'>
            How It Works
          </h1>
          <p className='text-lg text-gray-500'>
            A simple 4-step process to get you started!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Step 1 */}
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <FaSearch className='text-6xl text-blue-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-3 text-gray-700'>
              1. Discover
            </h2>
            <p className='text-gray-600'>
              Browse through our wide selection of services or projects that
              match your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <FaClipboardCheck className='text-6xl text-green-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-3 text-gray-700'>2. Choose</h2>
            <p className='text-gray-600'>
              Select the service or project that suits your goals, and check all
              the details.
            </p>
          </div>

          {/* Step 3 */}
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <FaRocket className='text-6xl text-purple-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-3 text-gray-700'>3. Launch</h2>
            <p className='text-gray-600'>
              Kick-start your project or service with just one click, and we’ll
              get started right away!
            </p>
          </div>

          {/* Step 4 */}
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <FaThumbsUp className='text-6xl text-yellow-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-3 text-gray-700'>
              4. Complete
            </h2>
            <p className='text-gray-600'>
              Once the project is done, review the results and enjoy the final
              product!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
