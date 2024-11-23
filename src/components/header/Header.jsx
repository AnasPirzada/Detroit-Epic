import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem('Token'));

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
