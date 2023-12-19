import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-blue-950 to-blue-950 text-white min-h-screen '>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 mx-64 my-20">
        {/* Card 1 */}
        <Link to='/blogs' className="flex">
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Mindfulness Meditation</h3>
            <p className="text-sm md:text-base lg:text-lg">Practice mindfulness to enhance self-awareness and reduce stress.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to='/music' className="flex">
          <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Music Therapy</h3>
            <p className="text-sm md:text-base lg:text-lg">Explore the healing power of music for relaxation and emotional well-being.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to='/books' className="flex">
          <div className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Books</h3>
            <p className="text-sm md:text-base lg:text-lg">Boost your mental well-being with daily positive affirmations and self-love.</p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to='/courses' className="flex">
          <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Courses</h3>
            <p className="text-sm md:text-base lg:text-lg">Connect with nature through outdoor activities for a refreshing mind.</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 mx-64">
        {/* Card 1 */}
        <Link to='/products' className="flex">
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Products</h3>
            <p className="text-sm md:text-base lg:text-lg">Practice mindfulness to enhance self-awareness and reduce stress.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to='/vr' className="flex">
          <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">VR Therapy</h3>
            <p className="text-sm md:text-base lg:text-lg">Explore the healing power of music for relaxation and emotional well-being.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Videos</h3>
          <p className="text-sm md:text-base lg:text-lg">Boost your mental well-being with daily positive affirmations and self-love.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex-grow">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Outdoor Activities</h3>
          <p className="text-sm md:text-base lg:text-lg">Connect with nature through outdoor activities for a refreshing mind.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
