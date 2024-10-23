import { useParams } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    title: 'Motown Museum Tour',
    description:
      'Step back in time and experience the birthplace of the Motown sound.',
    img: 'https://plus.unsplash.com/premium_photo-1683800241997-a387bacbf06b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Detailed experience information here...',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing experience! A must-see.', rating: 5 },
      { user: 'Bob', comment: 'Loved the history and the music!', rating: 4 },
    ],
  },
  {
    id: 2,
    title: 'Eastern Market Food Tour',
    description:
      "Savor the flavors of Detroit's historic farmers market.",
    img: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Detailed experience information here...',
    rating: 4.5,
    reviews: [
      { user: 'Charlie', comment: 'Great food and friendly guides!', rating: 5 },
      { user: 'Dana', comment: 'Interesting market, good food.', rating: 4 },
    ],
  },
  {
    id: 3,
    title: 'Detroit Riverfront Bike Ride',
    description:
      'Enjoy scenic views along the Detroit River on this guided bike tour.',
    img: 'https://images.unsplash.com/photo-1706025000011-65a93ae9c0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Detailed experience information here...',
    rating: 4.7,
    reviews: [
      { user: 'Eve', comment: 'Fantastic ride with beautiful views.', rating: 5 },
      { user: 'Frank', comment: 'Very enjoyable and relaxing.', rating: 4 },
    ],
  },
];

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === parseInt(id));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{experience.title}</h2>
      <img
        src={experience.img}
        alt={experience.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{experience.details}</p>
      <p className="text-sm text-gray-600 mb-4">{experience.description}</p>
      <h3 className="text-xl font-semibold mb-2">User Reviews:</h3>
      {experience.reviews.map((review, index) => (
        <div key={index} className="mb-2">
          <strong>{review.user}</strong>: {review.comment} (Rating: {review.rating}/5)
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetail;