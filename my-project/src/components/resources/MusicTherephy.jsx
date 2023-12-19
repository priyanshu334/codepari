import React from 'react'

const MusicTherephy = () => {
  return (
    <>
   <div className="bg-gradient-to-b from-black to-green-900 text-white min-h-screen flex flex-col items-center  p-8">
      <h1 className="text-4xl  my-10 font-extrabold mb-8  text-center">🎵 Discover the Healing Power of Music Therapy 🎵</h1>

      {/* Explanation Section */}
      <div className="max-w-3xl mb-8 text-center p-20">
        <p className="text-lg mb-4">
          🎶 Music therapy is a scientifically proven method to enhance mental health. It leverages the principles of neuroplasticity, the brain's ability to reorganize itself, to bring positive changes in mood, emotions, and cognitive function.
        </p>
        <p className="text-lg">
          🎧 Our AI Generative Music app is designed to create personalized therapeutic experiences, offering a range of mood-specific music to improve your overall well-being.
        </p>
      </div>

      {/* Mood Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Happy Mood Card */}
        <div className="bg-green-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Happy Vibes</h3>
          <p className="text-sm text-white mb-2">Elevate your mood with upbeat and cheerful tunes.</p>
        </div>

        {/* Calm Mood Card */}
        <div className="bg-green-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Calm Oasis</h3>
          <p className="text-sm text-white mb-2">Relax and unwind with soothing and tranquil melodies.</p>
        </div>

        {/* Energetic Mood Card */}
        <div className="bg-green-900 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Energetic Beats</h3>
          <p className="text-sm text-white mb-2">Boost your energy with invigorating and rhythmic tracks.</p>
        </div>

        {/* Sad Mood Card */}
        <div className="bg-green-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Comforting Melodies</h3>
          <p className="text-sm text-white mb-2">Find solace in gentle and empathetic tunes during challenging times.</p>
        </div>
        <div className="bg-green-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Comforting Melodies</h3>
          <p className="text-sm text-white mb-2">Find solace in gentle and empathetic tunes during challenging times.</p>
        </div>
        <div className="bg-green-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Comforting Melodies</h3>
          <p className="text-sm text-white mb-2">Find solace in gentle and empathetic tunes during challenging times.</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default MusicTherephy