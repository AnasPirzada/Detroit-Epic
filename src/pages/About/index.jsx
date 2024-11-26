import { FaCheckCircle } from 'react-icons/fa'; // Professional and elegant check icon
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const points = [
    'We believe every visit to our vibrant city should be unforgettable.',
    'Our dedicated team of local experts combines years of experience with cutting-edge AI technology.',
    'Personalized weekend itineraries tailored to your unique preferences.',
    'Discover the best that Detroit has to offer—romance, adventure, or relaxation!',
  ];
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

      <div className='bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-12 px-6 sm:px-12 lg:px-24'>
        <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 lg:p-12'>
          <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
            About Us
          </h1>
          <p className='text-lg text-gray-700 text-center mb-6'>
            At{' '}
            <span className='font-bold text-indigo-600'>
              Detroit Epic Weekend
            </span>
            , we aim to make every moment of your visit extraordinary with
            curated, personalized experiences.
          </p>
          <ul className='space-y-6'>
            {points.map((point, idx) => (
              <li key={idx} className='flex items-start text-gray-700 text-lg'>
                <FaCheckCircle className='text-indigo-600 w-6 h-6 mr-4 mt-1' />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
