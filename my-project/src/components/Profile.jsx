import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-8 p-4 text-center'>
        <h1 className='font-bold text-4xl mb-8'>Your Mental Wellness Profile</h1>
        <section className='text-gray-700 body-font'>
          <div className='container mx-auto flex flex-col items-center justify-center shadow-sm p-8 bg-white rounded-lg'>
            <img
              className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-md'
              alt='hero'
              src='https://dummyimage.com/720x600'
            />
            <div className='text-center lg:w-2/3 w-full'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                Embrace the Journey to Mental Well-being
              </h1>
              <p className='mb-8 leading-relaxed'>
                Discover a path to improved mental health using neuroscience and
                personalized techniques. Your well-being is our priority.
              </p>
              <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4'>
                <button className='inline-flex text-white bg-gradient-to-r from-blue-500 to-blue-600 border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded text-lg'>
                  <Link to='/stats'>View Stats</Link>
                </button>
                <button className='inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                  <Link to='/pricing'>Explore Plans</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
