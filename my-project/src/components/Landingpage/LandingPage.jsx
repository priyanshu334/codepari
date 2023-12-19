// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import header from './header.png';

const LandingPage = () => {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl p-8 bg-white bg-opacity-80 shadow-lg rounded-md text-center animate-fadeInUp">
          <h1 className="text-4xl font-extrabold text-teal-800 mb-6 animate-bounce">
            Welcome to Serenity: Your Mental Wellness Hub
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
            Take a profound step towards inner peace and well-being. Our platform, guided by top neurologists and psychologists, is meticulously designed to enhance your mental health through cutting-edge techniques based on neuroplasticity.
          </p>
          <div className="space-y-6">
            <Link to='/quiz'>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
                Begin Your Journey
              </button>
            </Link>
            <Link to='/main'>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
                Skip for Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
