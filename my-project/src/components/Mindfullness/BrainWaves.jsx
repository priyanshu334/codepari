import React from 'react';

const BrainWaves = () => {
  return (
    <div className='bg'>
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
            Understanding Brain Waves and Mood
          </h1>
          <p className="text-lg text-gray-700">
            Explore the different types of brain waves and how they can influence your mental state.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* Delta Waves */}
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 bg-white">
              <div className="w-16 h-16 bg-indigo-100 inline-flex items-center justify-center rounded-full mb-4">
                {/* Delta Waves Icon (Replace with your own icon) */}
                <img src="delta-waves-icon.png" alt="Delta Waves" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Delta Waves
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Associated with deep sleep and relaxation. Improves immune system function and supports healing.
                </p>
              </div>
            </div>
          </div>

          {/* Theta Waves */}
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 bg-white">
              <div className="w-16 h-16 bg-indigo-100 inline-flex items-center justify-center rounded-full mb-4">
                {/* Theta Waves Icon (Replace with your own icon) */}
                <img src="theta-waves-icon.png" alt="Theta Waves" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Theta Waves
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Associated with creativity and deep meditation. Enhances intuition and reduces anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Alpha Waves */}
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 bg-white">
              <div className="w-16 h-16 bg-indigo-100 inline-flex items-center justify-center rounded-full mb-4">
                {/* Alpha Waves Icon (Replace with your own icon) */}
                <img src="alpha-waves-icon.png" alt="Alpha Waves" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Alpha Waves
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Associated with relaxation and focus. Enhances learning, reduces stress, and promotes positive thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Beta Waves */}
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 bg-white">
              <div className="w-16 h-16 bg-indigo-100 inline-flex items-center justify-center rounded-full mb-4">
                {/* Beta Waves Icon (Replace with your own icon) */}
                <img src="beta-waves-icon.png" alt="Beta Waves" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Beta Waves
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Associated with active thinking and concentration. Increases alertness and cognitive performance.
                </p>
              </div>
            </div>
          </div>

          {/* Gamma Waves */}
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 bg-white">
              <div className="w-16 h-16 bg-indigo-100 inline-flex items-center justify-center rounded-full mb-4">
                {/* Gamma Waves Icon (Replace with your own icon) */}
                <img src="gamma-waves-icon.png" alt="Gamma Waves" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Gamma Waves
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Associated with heightened perception and consciousness. Enhances memory and cognitive function.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700">
            The brain's activity, reflected in these waves, can change with mood and mental state. Understanding and managing these waves can contribute to overall well-being.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default BrainWaves;
