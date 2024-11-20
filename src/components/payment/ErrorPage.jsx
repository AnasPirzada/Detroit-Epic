import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-red-600 mb-4'>
        Something Went Wrong
      </h1>
      <p className='text-gray-700 text-lg mb-8'>
        We're sorry, but an unexpected error occurred. Please try again later.
      </p>
      <button
        onClick={() => navigate('/Payment')}
        className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700'
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
