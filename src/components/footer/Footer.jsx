import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Ready to Explore Detroit?</h2>
        <p>Join DEW today and start planning your unforgettable experiences.</p>

        <Link to={"/register"}>
          <button className="bg-black text-white py-2 px-4 mt-4">
            Sign Up Now
          </button>
        </Link>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600">
          &copy; 2024 Detroit Experience Wrapper. All rights reserved.
        </p>
        <nav className="flex justify-center space-x-4 text-sm mt-2">
          <a href="/about" className="text-gray-600">
            About Us
          </a>
          <a href="/contact" className="text-gray-600">
            Contact
          </a>
          <a href="/privacy" className="text-gray-600">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-600">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
