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
    <>
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
            <Link to={'/Partner'}>
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

      <div>
        {/* Section 1: Don't Miss Out */}
        <div className='bg-pink-100 py-10 px-6 md:px-12 lg:px-20 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Don’t Miss Out!
          </h2>
          <p className='text-gray-700 mb-2'>
            Planning a weekend in Detroit is overwhelming. Too many options, too
            little time.
          </p>
          <p className='text-gray-700'>
            Don’t risk another disappointing weekend—let DEW craft an
            unforgettable experience for you.
          </p>
        </div>

        {/* Section 2: We Know Detroit */}
        <div className='bg-white py-10 px-6 md:px-12 lg:px-20 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            We Know Detroit Like No One Else
          </h2>
          <p className='text-gray-700 mb-4'>
            With years of experience and expert local knowledge, we know Detroit
            inside and out.
          </p>
          <blockquote className='italic text-gray-500'>
            "DEW made our trip to Detroit effortless and memorable!" – Sarah J.
          </blockquote>
        </div>

        {/* Section 3: Call to Action */}
        <div className='bg-blue-600 px-6 md:px-12 lg:px-20 text-center text-white'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Your Perfect Detroit Weekend is Just a Click Away
          </h2>
          <p className='mb-6'>
            Book now for exclusive access to Detroit’s top spots.
          </p>
        </div>
        <div className='text-center'>
          <Link to='/Partner'>
            <button className='bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 mb-10'>
              Start Partnering{' '}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
