const Price = () => {
  const plans = [
    {
      title: 'Free Plan',
      tagline: 'Explore Detroit with a free curated itinerary.',
      features: [
        'Basic itinerary suggestions',
        'No customization',
        'Limited event access',
      ],
      cta: 'Start Planning for Free',
      price: 'Free',
    },
    {
      title: 'One-Time Upgrade',
      tagline: 'Unlock premium features with a one-time fee.',
      features: [
        'Custom itineraries',
        'Exclusive discounts',
        'Priority reservations',
      ],
      cta: 'Upgrade for $4.99',
      price: '$4.99',
    },
    {
      title: 'Monthly Subscription',
      tagline:
        'Unlimited customization and priority access for frequent travelers.',
      features: [
        'Custom itineraries',
        'Exclusive discounts',
        'Priority reservations',
        'Premium support',
      ],
      cta: 'Subscribe Monthly for $7.99',
      price: '$7.99/month',
    },
    {
      title: 'Annual Subscription',
      tagline: 'Best value for frequent explorers—save with an annual plan!',
      features: [
        'Everything in the monthly plan',
        'Cost savings',
        'Special annual perks',
      ],
      cta: 'Upgrade for $79.99/year',
      price: '$79.99/year',
    },
  ];
  return <div>
    <div className="bg-gray-100 min-h-screen p-6 sm:p-12">
      {/* Headline */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Experience More of Detroit—Your Way
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in">
          Start with a free plan or upgrade to unlock customization and exclusive experiences.
        </p>
      </div>

      {/* Pricing Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg h-50 rounded-lg p-6 transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h2>
            <p className="text-gray-600 mb-4">{plan.tagline}</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-lg font-bold text-gray-800 mb-4">
              {plan.price}
            </div>
            <button className="w-full bg-gray-950 text-white py-2 rounded-lg hover:bg-blue-600">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>;
};
export default Price;
