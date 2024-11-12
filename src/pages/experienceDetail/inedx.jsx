import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userApi } from '../../Apis/index.jsx'; // Ensure GetExperiences is defined in userApi
import Loader from '../../components/loader';

const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperienceById = async () => {
      try {
        // Fetch all experiences
        const experiences = await userApi.Getexperiences();

        // Find the experience with the matching ID
        const matchedExperience = experiences.find(exp => exp._id === id);
        setExperience(matchedExperience);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setIsLoading(false); // Hide loader after fetching
      }
    };

    fetchExperienceById();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!experience) {
    return <p className='text-center'>Experience not found.</p>;
  }

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-3xl font-semibold mb-4'>{experience.title}</h2>
      <img
        src={experience.image}
        alt={experience.title}
        className='w-full h-64 object-cover mb-4'
      />
      <p className='text-lg mb-4'>{experience.description}</p>
      <p className='text-sm text-gray-600 mb-4'>
        Category: {experience.category}
      </p>
      <p className='text-sm text-gray-600 mb-4'>
        Rating: {experience.rating}/5
      </p>
      <h3 className='text-xl font-semibold mb-2'>User Reviews:</h3>
      {experience.reviews && experience.reviews.length > 0 ? (
        experience.reviews.map((review, index) => (
          <div key={index} className='mb-2'>
            <strong>{review.user}</strong>: {review.comment} (Rating:{' '}
            {review.rating}/5)
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ExperienceDetail;
