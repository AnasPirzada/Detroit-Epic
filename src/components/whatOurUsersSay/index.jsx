import { useState } from 'react';
import ShareReviewModal from '../../components/ShareReviewModal/index.jsx';
const testimonials = [
  {
    name: 'Sarah L.',
    quote:
      'DEW helped me discover amazing spots in Detroit I never knew existed!',
  },
  {
    name: 'Mike T.',
    quote: 'Planning my weekend has never been easier. Thanks, DEW!',
  },
  {
    name: 'Emily R.',
    quote:
      'As a tourist, DEW was my go-to guide for exploring Detroit like a local.',
  },
];

const WhatOurUsersSay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='p-8 mt-10 bg-gray-100 text-center'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold mb-6'>What Our Users Say</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-blue-500 text-black border p-2 rounded mb-6'
        >
          Share Your Review{' '}
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.map((user, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
            <p className='text-lg italic'>{user.quote}</p>
            <p className='mt-4 font-bold'>{user.name}</p>
          </div>
        ))}
      </div>

      <ShareReviewModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </section>
  );
};

export default WhatOurUsersSay;
