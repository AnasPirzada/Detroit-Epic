import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What are the top attractions in Detroit?',
      answer:
        'Some top attractions in Detroit include the Detroit Institute of Arts, Motown Museum, Belle Isle Park, and the Detroit Riverwalk.',
    },
    {
      question: 'How do I get around in Detroit?',
      answer:
        'You can get around Detroit using the Detroit People Mover, QLine streetcar, or by car. Public transportation options like buses are also available.',
    },
    {
      question: "What's the best time to visit Detroit?",
      answer:
        'The best time to visit Detroit is during the spring and summer months, from May to September, when the weather is warm and there are many outdoor activities.',
    },
    {
      question: 'Are there any food specialties I should try in Detroit?',
      answer:
        'Yes, you should try Detroit-style pizza, Coney dogs, and local craft beers. These are some of the specialties the city is known for.',
    },
    {
      question: 'Is Detroit safe for tourists?',
      answer:
        "Detroit is generally safe for tourists, especially in popular areas like downtown. However, like any large city, it's best to stay aware of your surroundings and avoid less frequented areas at night.",
    },
    {
      question: 'What makes Detroit Epic Weekend different from other travel planning services?',
      answer:
        'Detroit Epic Weekend is unique because it uses AI to generate fully customized, multi-day itineraries tailored to your preferences. Whether you want to explore Detroit’s art, culture, food, or nightlife, we provide curated experiences based on your interests. It’s the only platform that offers real-time adjustments, ensuring an unforgettable weekend experience.',
    },
    {
      question: 'How does the itinerary customization work?',
      answer:
        'After answering a series of questions about your preferences, such as dining, activities, and budget, DEW’s AI-driven system generates a personalized itinerary. You can choose to follow the plan, modify it, or explore additional suggestions throughout your weekend.',
    },
    {
      question: 'Can I choose the duration of my weekend experience?',
      answer:
        'Yes! Detroit Epic Weekend offers flexible options for 1-day, 2-day, or 3-day curated experiences. You can also customize the itinerary for longer stays if you plan to explore beyond the weekend.',
    },
    {
      question: 'What types of activities can I include in my itinerary?',
      answer:
        'DEW provides a wide range of activity options, including sightseeing, live music, sporting events, fine dining, outdoor activities, shopping, and relaxation. You can tailor your weekend to fit your interests, whether you want to explore Detroit’s history or enjoy the nightlife.',
    },
    {
      question: 'Can I modify my itinerary after it’s generated?',
      answer:
        'Absolutely! Detroit Epic Weekend allows you to make changes to your itinerary at any time. Our system provides real-time recommendations, so you can adjust plans on the go if something catches your eye or if you want to switch things up.',
    },
    {
      question: 'Do you offer transportation and accommodation options?',
      answer:
        'Yes! DEW helps you plan your transportation needs, from airport transfers to getting around the city. We also provide a range of accommodation options, from boutique hotels to luxury stays, based on your preferences and budget.',
    },
    {
      question: 'Can Detroit Epic Weekend accommodate special requests or occasions?',
      answer:
        "Definitely. Whether you're celebrating an anniversary, birthday, or another special occasion, we can customize your itinerary to include special touches like romantic dinners, VIP experiences, or surprise events.",
    },
    {
      question: 'Is DEW only for visitors, or can locals use it too?',
      answer:
        'DEW is perfect for both visitors and locals. Whether you\'re new to the city or just looking to explore Detroit in a new way, our platform helps you discover hidden gems and plan the ultimate weekend adventure.',
    },
    {
      question: 'Do I need to follow the entire itinerary?',
      answer:
        'Not at all! While DEW provides a full itinerary based on your preferences, you’re free to follow it as much or as little as you like. You can also add or remove activities throughout your weekend to suit your mood and pace.',
    },
    {
      question: 'Can I get real-time updates and suggestions during my weekend?',
      answer:
        'Yes! DEW offers real-time recommendations during your stay, ensuring you never miss out on exciting opportunities. Whether it’s a last-minute event or a great restaurant suggestion, you’ll have everything at your fingertips.',
    },
    {
      question: 'What is the cost of using Detroit Epic Weekend?',
      answer:
        'Our basic service for generating an itinerary is free. However, certain premium features, such as VIP access, personalized recommendations, and exclusive events, may come with additional fees.',
    },
    {
      question: 'How do I get started with Detroit Epic Weekend?',
      answer:
        'Simply visit our website, answer a few questions about your preferences and interests, and let our AI create a personalized itinerary for you. It\'s fast, easy, and will help ensure you have an epic weekend in Detroit!',
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Customer Support</h1>
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-left py-3 flex justify-between items-center text-lg font-medium"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
