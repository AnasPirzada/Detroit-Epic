import React from "react";
import {
  FaSearch,
  FaClipboardCheck,
  FaRocket,
  FaThumbsUp,
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          How It Works
        </h1>
        <p className="text-lg text-gray-500">
          A simple 4-step process to get you started!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaSearch className="text-6xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-700">1. Discover</h2>
          <p className="text-gray-600">
            Browse through our wide selection of services or projects that match
            your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaClipboardCheck className="text-6xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-700">2. Choose</h2>
          <p className="text-gray-600">
            Select the service or project that suits your goals, and check all
            the details.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaRocket className="text-6xl text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-700">3. Launch</h2>
          <p className="text-gray-600">
            Kick-start your project or service with just one click, and we’ll
            get started right away!
          </p>
        </div>

        {/* Step 4 */}
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <FaThumbsUp className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-700">4. Complete</h2>
          <p className="text-gray-600">
            Once the project is done, review the results and enjoy the final
            product!
          </p>
        </div>
      </div>
    </div>
  );
}
