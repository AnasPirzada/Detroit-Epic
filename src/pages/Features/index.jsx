const features = [
  {
    id: 1,
    image: 'Isle_Park.jpg',
    heading: 'Belle Isle Park',
  },
  {
    id: 2,
    image: 'Detroit_Riverwalk.jpg',
    heading: 'Detroit Riverwalk',
  },
  {
    id: 3,
    image: 'casino_and_hotel.jpg',
    heading: 'Motor casino and hotel',
  },
  {
    id: 4,
    image: 'Comerica_Park.jpg ',
    heading: 'Detroit sporting events',
  },
  {
    id: 5,
    image: 'sporting_events.jpg',
    heading: 'Comerica Park',
  },
  {
    id: 6,
    image: 'Detroit_Lions.jpg',
    heading: 'Detroit Lions',
  },
];

const index = () => {
  return (
    <div className='p-8 bg-gray-100'>
      <h1 className='text-3xl font-bold text-center mb-8'>Our Features</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(feature => (
          <div
            key={feature.id}
            className='bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105'
          >
            <img
              src={feature.image}
              alt={feature.heading}
              className='w-full h-40 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-800 text-center'>
                {feature.heading}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
