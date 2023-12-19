import React from 'react'
import Charts from './Charts';

const AnalyticsPage = () => {
  
    const moodData = [
        { label: 'Happiness', value: 70 },
        { label: 'Stress', value: 30 },
        { label: 'Anxiety', value: 40 },
        // Add more mental health metrics as needed
      ];
    
      return (
        <div className="flex flex-col min-h-screen bg-gray-100">
          <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto text-center">
              <h1 className="text-2xl font-semibold">Mental Health Analytics</h1>
            </div>
          </header>
          <main className="container mx-auto my-8">
            <section className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold mb-4">Mood Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {moodData.map((dataPoint) => (
                  <div key={dataPoint.label} className="bg-blue-100 p-4 rounded-md">
                    <p className="text-lg font-semibold mb-2">{dataPoint.label}</p>
                    <p className="text-3xl">{dataPoint.value}%</p>
                  </div>
                ))}
              </div>
            </section>
            <Charts/>
    
            {/* Add more sections and visualizations for different metrics */}
    
            {/* Example: Sleep Patterns */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Sleep Patterns</h2>
              {/* Add your sleep patterns visualization here */}
              <p className="text-gray-700">Placeholder: Sleep patterns visualization goes here.</p>
            </section>
          </main>
        </div>
  )
}

export default AnalyticsPage