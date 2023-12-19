import React from 'react'

const VrTherephy = () => {
  return (
    <>
     <div className="bg-gradient-to-b from-black to-blue-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">🌐 Explore the Benefits of Virtual Reality Therapy 🌐</h1>

      {/* Explanation Section */}
      <div className="max-w-3xl mb-8 text-center">
        <p className="text-lg mb-4">
          🧠 Virtual Reality (VR) therapy is an innovative approach to improving mental health. It provides immersive experiences that can aid in reducing stress, anxiety, and other mental health challenges.
        </p>
        <p className="text-lg">
          🚀 Our VR Therapy platform offers cutting-edge features to create a personalized and effective therapeutic journey, leveraging the power of immersive technology.
        </p>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Relaxation Feature Card */}
        <div className="bg-blue-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Immersive Relaxation</h3>
          <p className="text-sm text-white mb-2">Experience tranquil environments for deep relaxation and stress relief.</p>
        </div>

        {/* Exposure Therapy Feature Card */}
        <div className="bg-blue-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Exposure Therapy</h3>
          <p className="text-sm text-white mb-2">Confront and overcome fears in a controlled and virtual environment.</p>
        </div>

        {/* Mindfulness Feature Card */}
        <div className="bg-blue-900 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Mindfulness Journeys</h3>
          <p className="text-sm text-white mb-2">Engage in guided mindfulness sessions in immersive VR settings.</p>
        </div>

        {/* Social Interaction Feature Card */}
        <div className="bg-blue-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Virtual Social Interaction</h3>
          <p className="text-sm text-white mb-2">Connect with others in a virtual space to enhance social well-being.</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default VrTherephy