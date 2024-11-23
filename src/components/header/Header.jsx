import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem('Token'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Custom event to handle local storage updates in the same tab
    const handleTokenChange = () => {
      setToken(localStorage.getItem('Token'));
    };

    // Listen for the custom event to update the token
    window.addEventListener('tokenChanged', handleTokenChange);

    // Listen for changes to the localStorage item "Token" from other tabs
    const handleStorageChange = event => {
      if (event.key === 'Token') {
        setToken(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listeners
    return () => {
      window.removeEventListener('tokenChanged', handleTokenChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to update the token and emit the custom event
  const updateToken = value => {
    localStorage.setItem('Token', value);
    const event = new Event('tokenChanged');
    window.dispatchEvent(event);
  };

  return (
    <header className='shadow-md relative bg-[#fff] text-gray-800'>
      <div className='absolute inset-0'></div>
      <nav className='relative z-10 flex justify-between items-center px-4 py-4'>
        <Link to={'/'}>
          <div className='text-2xl font-bold'>DEW</div>
        </Link>
        {!token ? null : (
          <>
            {/* Hamburger Icon */}
            <div className='absolute left-5 top-20'>
              <button
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
          </>
        )}
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute top-32 left-0 w-full bg-white shadow-md rounded-lg mt-2 md:w-auto'>
            <ul className='flex flex-col'>
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

        <div className='space-x-4'>
          <Link to={'/faq'}>
            <a href='#features' className='hover:text-gray-300'>
              FAQ
            </a>
          </Link>
          <Link to={'/experience'}>
            <a href='#experiences' className='hover:text-gray-300'>
              Experiences
            </a>
          </Link>
          <Link to={'/blogs'}>
            <a href='#experiences' className='hover:text-gray-300'>
              Blogs
            </a>
          </Link>
          {!token ? (
            <>
              <Link to={'/login'}>
                <a href='#login' className='hover:text-gray-300'>
                  Login
                </a>
              </Link>
              <Link to={'/price'}>
                <a href='#price' className='hover:text-gray-300'>
                  Pricing
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link to={'/login'}>
                <a
                  href='#logout'
                  className='hover:text-gray-300'
                  onClick={() => {
                    localStorage.removeItem('Token'); // Remove the token completely
                    updateToken(''); // Trigger state update and event
                    setTimeout(() => {
                      window.location.reload(); // Force reload after redirect
                    }, 0);
                  }}
                >
                  Logout
                </a>
              </Link>

              <Link to={'/user-profile'}>
                <a
                  href='#signup'
                  className='bg-white text-black px-4 py-2 rounded hover:bg-gray-200'
                >
                  Profile
                </a>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
