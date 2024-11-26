import { useState } from 'react';
import {
  FaCocktail,
  FaLandmark,
  FaMapMarkerAlt,
  FaMusic,
  FaUtensils,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function DetroitEpicWeekend() {
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
          <h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
            Detroit Epic Weekend Guide
          </h1>
          <p className='text-xl text-gray-600'>
            Ready for an unforgettable weekend in the Motor City? Here's your
            go-to guide to maximize your time in Detroit.
          </p>
        </div>

        {/* Day 1 */}
        <section className='mb-12'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>
            Day 1: Exploring the Heart of Detroit
          </h2>

          {/* Morning */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Morning: Downtown Stroll
            </h3>
            <div className='flex items-start mb-4'>
              <FaMapMarkerAlt className='text-3xl text-green-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Start your day with a walk around the vibrant downtown area.
                Visit the iconic <strong>Campus Martius Park</strong>, check out
                the beautiful architecture, and grab a coffee from a local café.
              </p>
            </div>
          </div>

          {/* Afternoon */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Afternoon: Detroit Institute of Arts
            </h3>
            <div className='flex items-start mb-4'>
              <FaLandmark className='text-3xl text-purple-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Spend the afternoon at the{' '}
                <strong>Detroit Institute of Arts</strong>—one of the most
                renowned museums in the country. Explore incredible collections
                of art from across the globe.
              </p>
            </div>
          </div>

          {/* Evening */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Evening: Dinner at Selden Standard
            </h3>
            <div className='flex items-start mb-4'>
              <FaUtensils className='text-3xl text-red-500 mr-4' />
              <p className='text-lg text-gray-700'>
                End your day with a delicious dinner at{' '}
                <strong>Selden Standard</strong>, where locally-sourced
                ingredients meet upscale comfort food.
              </p>
            </div>
          </div>

          {/* Night */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Night: Jazz at Cliff Bell's
            </h3>
            <div className='flex items-start mb-4'>
              <FaMusic className='text-3xl text-yellow-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Wrap up the night at <strong>Cliff Bell's</strong>, a famous
                jazz club where you can enjoy live music and cocktails in a
                classic Art Deco setting.
              </p>
            </div>
          </div>
        </section>

        {/* Day 2 */}
        <section className='mb-12'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>
            Day 2: Adventure and Entertainment
          </h2>

          {/* Morning */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Morning: Eastern Market
            </h3>
            <div className='flex items-start mb-4'>
              <FaMapMarkerAlt className='text-3xl text-green-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Begin your day with a visit to <strong>Eastern Market</strong>,
                one of the nation's largest public markets. Stroll through the
                vendor stalls, enjoy fresh produce, artisan goods, and local
                delicacies.
              </p>
            </div>
          </div>

          {/* Afternoon */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Afternoon: Belle Isle Park
            </h3>
            <div className='flex items-start mb-4'>
              <FaMapMarkerAlt className='text-3xl text-green-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Head over to <strong>Belle Isle Park</strong> for an afternoon
                of outdoor fun. Visit the aquarium, explore nature trails, or
                just relax by the water and enjoy beautiful views of the Detroit
                skyline.
              </p>
            </div>
          </div>

          {/* Evening */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Evening: Dinner at Wright & Company
            </h3>
            <div className='flex items-start mb-4'>
              <FaUtensils className='text-3xl text-red-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Dine in style at <strong>Wright & Company</strong>, a trendy
                spot offering small plates and craft cocktails, perfect for
                sharing with friends.
              </p>
            </div>
          </div>

          {/* Night */}
          <div className='mb-8'>
            <h3 className='text-3xl font-semibold mb-3 text-blue-600'>
              Night: Drinks at The Sugar House
            </h3>
            <div className='flex items-start mb-4'>
              <FaCocktail className='text-3xl text-pink-500 mr-4' />
              <p className='text-lg text-gray-700'>
                Cap off your weekend with a trip to{' '}
                <strong>The Sugar House</strong>, one of Detroit’s best cocktail
                bars known for its creative and expertly crafted drinks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
