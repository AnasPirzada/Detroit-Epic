import Loader from '@/components/loader';
import WhatOurUsersSay from '@/components/whatOurUsersSay';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from '../../Apis/index.jsx';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch experiences from API
  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const response = await userApi.Getexperiences();
      setExperiences(response);
    } catch (error) {
      console.error('Failed to fetch experiences:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-10'>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Curated Experiences</h3>
          <p>Handpicked local adventures</p>
        </div>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Live Events</h3>
          <p>Up-to-date concert and event listings</p>
        </div>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Foodie Favorites</h3>
          <p>Best local eateries and hidden gems</p>
        </div>
        <div className='p-4 bg-white shadow rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Photo Spots</h3>
          <p>Instagram-worthy locations</p>
        </div>
      </div>

      <h2 className='text-3xl font-semibold mb-6'>
        Featured Detroit Experiences
      </h2>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {experiences.map(experience => (
            <div
              key={experience._id}
              className='bg-white shadow rounded-lg p-4'
            >
              {experience.isFeatured && (
                <div className='mb-4'>
                  <span className='text-sm bg-yellow-300 text-black rounded-full px-2 py-1'>
                    Featured Experience of the Week
                  </span>
                </div>
              )}
              <img
                src={experience.image}
                alt={experience.title}
                className='w-full h-48 object-cover mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{experience.title}</h3>
              <p className='mb-2 font-medium'>
                Rating: {experience.rating} ({experience.numberOfReviews}{' '}
                reviews)
              </p>
              <p className='mb-4'>{experience.description}</p>
              <Link
                to={`/experience/${experience._id}`}
                className='px-4 py-2 bg-blue-500 border text-black rounded'
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      )}

      <WhatOurUsersSay />
    </div>
  );
};

export default Experience;
