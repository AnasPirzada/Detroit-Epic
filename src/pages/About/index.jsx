import { FaCheckCircle } from 'react-icons/fa'; // Professional and elegant check icon

const AboutUsPage = () => {
  const points = [
    'We believe every visit to our vibrant city should be unforgettable.',
    'Our dedicated team of local experts combines years of experience with cutting-edge AI technology.',
    'Personalized weekend itineraries tailored to your unique preferences.',
    'Discover the best that Detroit has to offer—romance, adventure, or relaxation!',
  ];

  return (
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
  );
};

export default AboutUsPage;
