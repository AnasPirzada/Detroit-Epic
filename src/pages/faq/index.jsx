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
