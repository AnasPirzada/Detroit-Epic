import Loader from '@/components/loader';
import { useEffect, useState } from 'react';
import { userApi } from '../../Apis/index.jsx';
import ShareReviewModal from '../../components/ShareReviewModal/index.jsx';

const WhatOurUsersSay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await userApi.Getreviews();
      const apiTestimonials = response.map(review => ({
        name: review.createdBy?.fullName || 'Anonymous',
        quote: review.description,
      }));
      setTestimonials(apiTestimonials);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className='p-8 mt-10 bg-gray-100 text-center'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold mb-6'>What Our Users Say</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-blue-500 text-black border p-2 rounded mb-6'
        >
          Share Your Review
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((user, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-lg italic'>{user.quote}</p>
              <p className='mt-4 font-bold'>{user.name}</p>
            </div>
          ))}
        </div>
      )}

      <ShareReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshReviews={fetchReviews} // Passing the function correctly
      />
    </section>
  );
};

export default WhatOurUsersSay;
