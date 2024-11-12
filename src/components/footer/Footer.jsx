import { Link } from 'react-router-dom';

const Footer = () => {
  const token = localStorage.getItem('Token');

  return (
    <footer className='bg-gray-100 text-center py-8'>
      {/* Conditionally render the signup div if no token is found */}
      {!token && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-4'>Ready to Explore Detroit?</h2>
          <p>Join DEW today and start planning your unforgettable experiences.</p>
          <Link to={'/register'}>
            <button className='bg-black text-white py-2 px-4 mt-4'>
              Sign Up Now
            </button>
          </Link>
        </div>
      )}

      <div className='border-t border-gray-300 pt-4'>
        <p className='text-sm text-gray-600'>
          &copy; 2024 Detroit Experience Wrapper. All rights reserved.
        </p>
        <nav className='flex justify-center space-x-4 text-sm mt-2'>
          <Link to='/about' className='text-gray-600'>
            About Us
          </Link>
          <Link to='/contact' className='text-gray-600'>
            Contact
          </Link>
          <Link to='/privacy-policy' className='text-gray-600'>
            Privacy Policy
          </Link>
          <Link to='/terms-and-conditions' className='text-gray-600'>
            Terms of Conditions
          </Link>
          <Link to='/guide' className='text-gray-600'>
            Guide
          </Link>
          <Link to='/work' className='text-gray-600'>
            How it Works
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
