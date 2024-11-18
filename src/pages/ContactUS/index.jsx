import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

const index = () => {
  return (
    <div className='bg-gray-50 min-h-screen py-12 px-4 sm:px-12 lg:px-24'>
      <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
        Contact Us
      </h1>
      <div className='bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-6 hover:shadow-xl transition-shadow duration-300'>
        <div className='flex items-center text-gray-600'>
          <FaEnvelope className='w-6 h-6 text-blue-500 mr-4' />
          <span className='text-lg'>Email: support@detroitepicweekend.com</span>
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
  );
};

export default index;
