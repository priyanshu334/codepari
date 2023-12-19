import React from 'react'

const Producs = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-gray-900 to-purple-800 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">🌟 Elevate Your Mental Well-being with Our Transformative Products 🌟</h1>

      {/* Introduction Section */}
      <div className="max-w-3xl mb-8 text-center">
        <p className="text-lg mb-4">
          Discover a curated collection of products designed to enhance your mental health and foster personal growth. Each item is carefully selected to contribute to your well-being journey.
        </p>
        <p className="text-lg">
          Invest in yourself and explore how these products can be your companions on the path to becoming the best version of yourself.
        </p>
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mindful Journal Product Card */}
        <div className="bg-purple-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Mindful Journal</h3>
          <p className="text-sm text-white mb-2">Reflect on your thoughts and emotions with our guided mindful journal, promoting self-awareness and gratitude.</p>
        </div>

        {/* Meditation App Product Card */}
        <div className="bg-purple-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Serenity Meditation App</h3>
          <p className="text-sm text-white mb-2">Embark on a journey of tranquility with our meditation app, offering guided sessions to reduce stress and increase mindfulness.</p>
        </div>

        {/* Growth Planner Product Card */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Growth Planner</h3>
          <p className="text-sm text-white mb-2">Plan your personal and professional growth milestones with our comprehensive growth planner, fostering motivation and achievement.</p>
        </div>
      </div>

      {/* Paragraph about Product Benefits */}
      <div className="max-w-2xl mt-8 text-center">
        <p className="text-lg">
          Our products are not just tools; they are companions on your journey to better mental health and personal growth. Whether you choose to express your thoughts through mindful journaling, find serenity in meditation, or plan your future with purpose, each product is crafted to support you on the path to becoming the best version of yourself.
        </p>
      </div>
    </div>
    
    </>
  )
}

export default Producs