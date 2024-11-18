import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('Token'));

  useEffect(() => {
    // Listen for changes to the localStorage item "Token"
    const handleStorageChange = () => {
      setToken(localStorage.getItem('Token'));
    };

    // Add event listener to handle token changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <div
      className='h-screen relative flex items-center justify-between w-[100%] flex-col'
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='relative z-10 text-center py-24'>
        <h1 className='text-5xl font-bold mb-4'>
          Personalized Detroit Weekend Adventures{' '}
        </h1>
        <p className='text-xl mb-8'>
          We plan unforgettable weekend experiences in Detroit, so you don’t
          have to.
        </p>
        {!token ? (
          <Link to={'/login'}>
            <button className='bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200'>
              Start Planning My Weekend{' '}
            </button>
          </Link>
        ) : (
          <>
            <Link to={'/user-profile'}>
              <button className='bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200'>
                Start Planning My Weekend{' '}
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
