import WhatOurUsersSay from '@/components/whatOurUsersSay';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Motown Museum Tour',
      description:
        'Step back in time and experience the birthplace of the Motown sound.',
      img: 'https://plus.unsplash.com/premium_photo-1683800241997-a387bacbf06b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 150,
      featured: true,
    },
    {
      id: 2,
      title: 'Eastern Market Food Tour',
      description: "Savor the flavors of Detroit's historic farmers market.",
      img: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      reviews: 100,
      featured: false,
    },
    {
      id: 3,
      title: 'Detroit Riverfront Bike Ride',
      description:
        'Enjoy scenic views along the Detroit River on this guided bike tour.',
      img: 'https://images.unsplash.com/photo-1706025000011-65a93ae9c0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 80,
      featured: false,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Curated Experiences</h3>
          <p>Handpicked local adventures</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Live Events</h3>
          <p>Up-to-date concert and event listings</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Foodie Favorites</h3>
          <p>Best local eateries and hidden gems</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Photo Spots</h3>
          <p>Instagram-worthy locations</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-6">
        Featured Detroit Experiences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white shadow rounded-lg p-4">
            {experience.featured && (
              <div className="mb-4">
                <span className="text-sm bg-yellow-300 text-black rounded-full px-2 py-1">
                  Featured Experience of the Week
                </span>
              </div>
            )}
            <img
              src={experience.img}
              alt={experience.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            <p className="mb-2 font-medium">
              Rating: {experience.rating} ({experience.reviews} reviews)
            </p>
            <p className="mb-4">{experience.description}</p>
            <Link
              to={`/experience/${experience.id}`}
              className="px-4 py-2 bg-blue-500 border text-black rounded"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <WhatOurUsersSay />
    </div>
  );
};

export default Experience;
