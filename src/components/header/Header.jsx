import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="shadow-md relative bg-[#fff] text-gray-800">
        <div className="absolute inset-0 "></div>
        <nav className="relative z-10 flex justify-between items-center px-4 py-4">
          <Link to={'/'}>
            <div className="text-2xl font-bold">DEW</div>
          </Link>
          <div className="space-x-4">
            <Link to={'/faq'}>
              <a href="#features" className="hover:text-gray-300">
                FAQ
              </a>
            </Link>
            <Link to={'/experience'}>
              <a href="#experiences" className="hover:text-gray-300">
                Experiences
              </a>
            </Link>
            <Link to={'/blogs'}>
              <a href="#experiences" className="hover:text-gray-300">
                Blogs
              </a>
            </Link>
            <Link to={'/login'}>
              <a href="#login" className="hover:text-gray-300">
                Login
              </a>
            </Link>
            <Link to={'/user-profile'}>
              <a
                href="#signup"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
              >
                profile
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
