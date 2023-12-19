import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen '>
   <Navbar/>

   <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-4 gap-4 p-8 mx-56">
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6  rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Mindfulness Meditation</h3>
        <p className="text-sm">Practice mindfulness to enhance self-awareness and reduce stress.</p>
      </div>

      <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Music Therapy</h3>
        <p className="text-sm">Explore the healing power of music for relaxation and emotional well-being.</p>
      </div>

      <div className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Positive Affirmations</h3>
        <p className="text-sm">Boost your mental well-being with daily positive affirmations and self-love.</p>
      </div>

      <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Outdoor Activities</h3>
        <p className="text-sm">Connect with nature through outdoor activities for a refreshing mind.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 my-10 mx-56">
      <Link to='/brainwaves'>
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Brain Waves</h3>
        <p className="text-sm">Practice mindfulness to enhance self-awareness and reduce stress.</p>
      </div>
      </Link>
      <Link to='/music'>
      <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Music Therapy</h3>
        <p className="text-sm">Explore the healing power of music for relaxation and emotional well-being.</p>
      </div>
      </Link>
      <div className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Positive Affirmations</h3>
        <p className="text-sm">Boost your mental well-being with daily positive affirmations and self-love.</p>
      </div>

      <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Outdoor Activities</h3>
        <p className="text-sm">Connect with nature through outdoor activities for a refreshing mind.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 my-16 mx-56" >
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Mindfulness Meditation</h3>
        <p className="text-sm">Practice mindfulness to enhance self-awareness and reduce stress.</p>
      </div>

      <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Music Therapy</h3>
        <p className="text-sm">Explore the healing power of music for relaxation and emotional well-being.</p>
      </div>

      <div className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Positive Affirmations</h3>
        <p className="text-sm">Boost your mental well-being with daily positive affirmations and self-love.</p>
      </div>

      <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-2xl font-semibold mb-3">Outdoor Activities</h3>
        <p className="text-sm">Connect with nature through outdoor activities for a refreshing mind.</p>
      </div>
    </div>
  
   <Footer/>

   </div>
  )
}

export default Home