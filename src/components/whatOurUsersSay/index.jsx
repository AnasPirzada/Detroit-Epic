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
  return (
    <section className='p-8 mt-10 bg-gray-100 text-center'>
      <h2 className='text-xl font-bold mb-6'>What Our Users Say</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.map((user, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
            <p className='text-lg italic'>{user.quote}</p>
            <p className='mt-4 font-bold'>{user.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatOurUsersSay;
