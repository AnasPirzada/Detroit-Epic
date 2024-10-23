import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen relative bg-gray-800 text-white flex items-center justify-between w-[100%] flex-col">
      <div className="relative z-10 text-center py-24  ">
        <h1 className="text-5xl font-bold mb-4">
          Discover Detroits Hidden Gems
        </h1>
        <p className="text-xl mb-8">Plan Your Epic Weekend with DEW</p>

        <Link to={'/register'}>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

//

export default Home;
