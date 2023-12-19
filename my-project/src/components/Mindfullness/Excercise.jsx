import React from 'react'

const Excercise = () => {
  return (
  <>
    <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8">Choose an Exercise for Your Mental Health</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Exercise Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Mindful Breathing</h3>
          <p className="text-gray-700">Practice deep and mindful breathing exercises to calm your mind.</p>
        </div>

        {/* Exercise Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Yoga for Relaxation</h3>
          <p className="text-gray-700">Explore yoga poses and stretches to relax both your body and mind.</p>
        </div>

        {/* Exercise Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Nature Walk</h3>
          <p className="text-gray-700">Take a walk in nature to connect with the environment and clear your thoughts.</p>
        </div>
        {/* Add more Exercise Cards for additional exercises */}
      </div>

      {/* Additional Information */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">How Physical Exercise Improves Mental Health</h2>
        <p className="text-lg">
          Regular physical exercise has been shown to have numerous benefits for mental health. It can help reduce
          stress, anxiety, and depression, improve mood, boost self-esteem, and enhance cognitive function. Exercise
          releases endorphins, which act as natural mood lifters, promoting an overall sense of well-being.
        </p>
        <p className="text-lg mt-4">
          Incorporating physical activity into your routine can be a powerful tool for managing and improving mental health.
          Choose activities that you enjoy, and make exercise a regular part of your self-care routine.
        </p>
      </div>
    </div>
  
  </>
  )
}

export default Excercise