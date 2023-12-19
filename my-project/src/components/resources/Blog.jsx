import React from 'react'

const Blog = () => {
  return (
<>
<div className='bg-red-950 p-28 '>
<div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md shadow-black hover:bg-slate-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog</h1>

      <div className="mb-8">
        <img
          className="w-full h-64 object-cover object-center rounded-md mb-4"
          src="https://via.placeholder.com/800x400"
          alt="Blog Cover"
        />
        <p className="text-gray-600 text-sm">Published on January 1, 2023</p>
        <h2 className="text-2xl font-bold my-2">Sample Blog Post Title</h2>
        <p className="text-gray-800 leading-relaxed">
        Mental health is a crucial component of overall well-being, encompassing emotional, psychological, and social aspects of an individual's life. It is not merely the absence of mental disorders but reflects a state of balance, resilience, and the ability to cope with life's challenges. Just as physical health is integral to a person's vitality, mental health plays a fundamental role in shaping one's thoughts, emotions, and behaviors.

A positive state of mental health allows individuals to navigate the complexities of daily life, form meaningful relationships, and contribute to their communities. It involves the ability to manage stress, cope with adversity, and make informed decisions. Mental well-being is dynamic and can fluctuate over time, influenced by various factors such as genetics, environment, and life experiences.

Conversely, challenges to mental health can manifest in the form of mental illnesses, ranging from mood disorders like depression and anxiety to more severe conditions such as schizophrenia. Stigma and misconceptions surrounding mental health can often hinder individuals from seeking help, exacerbating the impact of these conditions.

Promoting mental health involves fostering a supportive and inclusive environment that encourages open conversations and reduces stigma. Access to mental health services, resources, and education is vital to empower individuals to recognize, understand, and address their mental health needs.

The significance of mental health extends beyond the individual, impacting families, workplaces, and communities at large. Employers are increasingly recognizing the importance of creating mentally healthy workplaces, understanding that employee well-being directly correlates with productivity and job satisfaction.

In conclusion, prioritizing mental health is an integral aspect of living a fulfilling and balanced life. It requires a holistic approach that encompasses self-awareness, support systems, and access to professional resources. By acknowledging the intricate connection between mental health and overall well-being, we can collectively work towards building a society that values, understands, and promotes mental health for all.
        </p>
      </div>

      {/* Add more blog posts as needed */}
    </div>
    </div>
</>
  )
}

export default Blog