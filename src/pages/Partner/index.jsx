const index = () => {
  return (
    <div>
      <div className='bg-white py-10 px-6 md:px-12 lg:px-20'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Why Partner with DEW?
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
            <div className='flex justify-center mb-4'>
              <span className='text-4xl'>🚀</span>
            </div>
            <h2 className='text-xl font-bold mb-2'>Boost Your Visibility</h2>
            <p className='text-gray-700'>
              Gain exposure to tourists and locals looking for tailored weekend
              plans.
            </p>
          </div>
          {/* Card 2 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
            <div className='flex justify-center mb-4'>
              <span className='text-4xl'>📈</span>
            </div>
            <h2 className='text-xl font-bold mb-2'>Drive More Bookings</h2>
            <p className='text-gray-700'>
              Direct links to your reservations or offers make it easier for
              customers to choose you.
            </p>
          </div>
          {/* Card 3 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
            <div className='flex justify-center mb-4'>
              <span className='text-4xl'>🎯</span>
            </div>
            <h2 className='text-xl font-bold mb-2'>Tailored Advertising</h2>
            <p className='text-gray-700'>
              DEW's AI ensures your business is recommended to users most likely
              to visit, maximizing your marketing spend.
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className='mt-8 text-center text-gray-600'>
          <p>
            <strong>Special Offer:</strong> Sign up for Silver, Gold, or
            Platinum now and get 50% off your first month! Don’t miss this
            chance to reach new customers.
          </p>
        </div>
      </div>
      <div className='py-10 px-6 md:px-12 lg:px-20 text-center'>
        {/* Header Section */}

        <h1 className='text-3xl md:text-4xl font-bold mb-6'>
          Partner With DEW to Showcase Your Business
        </h1>
        <p className='text-gray-600 mb-10'>
          Become a part of Detroit’s most exciting weekend planning platform by
          showcasing your restaurant, entertainment venue, or hotel. Choose the
          package that suits your business needs and watch your customer base
          grow with our tailored recommendations and premium exposure
          opportunities.
        </p>

        {/* Subheading */}
        <h2 className='text-2xl md:text-3xl font-bold mb-8'>
          Partnership Levels:
        </h2>

        {/* Partnership Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Free Plan */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Free</h3>
            <p className='text-green-500 font-bold text-lg mb-4'>
              Cost: $0/month
            </p>
            <p className='text-gray-700'>
              Basic listing on the DEW website and app.
            </p>
            <p className='text-gray-700'>
              Featuring your business name and contact details.
            </p>
          </div>

          {/* Silver Plan */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Silver</h3>
            <p className='text-green-500 font-bold text-lg mb-4'>
              Cost: $50/month
            </p>
            <p className='text-gray-700'>
              Enhanced listing with photos, menu details, or special offers.
            </p>
            <p className='text-gray-700'>
              Direct links to reservations or online booking systems.
            </p>
          </div>

          {/* Gold Plan */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Gold</h3>
            <p className='text-green-500 font-bold text-lg mb-4'>
              Cost: $100/month
            </p>
            <p className='text-gray-700'>
              Featured placement on DEW’s popular itineraries.
            </p>
            <p className='text-gray-700'>
              Highlighted placement when users search for your type of business.
            </p>
          </div>

          {/* Platinum Plan */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Platinum</h3>
            <p className='text-green-500 font-bold text-lg mb-4'>
              Cost: $200/month
            </p>
            <p className='text-gray-700'>
              Full integration with DEW’s AI-powered recommendations.
            </p>
            <p className='text-gray-700'>
              Premium advertising spots on DEW’s homepage and targeted email
              campaigns.
            </p>
            <p className='text-gray-700'>
              Your business will appear in prime placements across the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
