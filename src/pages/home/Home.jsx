import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="h-screen relative flex items-center justify-between w-[100%] flex-col"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-center py-24">
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

export default Home;
