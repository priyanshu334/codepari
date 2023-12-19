import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'


const Therapist = () => {
  return (
    <>
    <Navbar/>
    <h1 className='font-bold text-center my-28 text-4xl  text-indigo-700 py-7'>Therapist Connection</h1>
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Taking the courageous step to seek help from a therapist for a mental health checkup is an empowering choice that demonstrates a profound commitment to your well-being. Just as we prioritize our physical health with regular checkups, your mental health deserves the same level of attention and care. A therapist provides a safe, confidential space where you can openly explore your thoughts and feelings without judgment. It's a journey of self-discovery, allowing you to understand yourself better, navigate life's challenges, and develop effective coping strategies for stress and anxiety.
  </p>

  <p className="mt-4 text-lg text-gray-800 leading-relaxed">
    Choosing to reach out to a therapist is a powerful act of self-care and an investment in your personal growth and emotional resilience. The insights gained from therapy not only help you manage your current struggles but also equip you with tools to navigate future challenges. Moreover, therapy is about improving relationships, enhancing communication skills, and fostering a deeper connection with yourself and others. Remember, taking care of your mental health is an essential aspect of living a balanced and fulfilling life. You're not alone on this journey, and seeking support is a courageous and positive step toward a healthier, happier you.
  </p>

  <p className="mt-6 text-gray-600">
    If you have any concerns or questions, please feel free to reach out. Your well-being matters.
  </p>

  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-9 ">
  Enquire
</button>
<div>
    
</div>

<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md focus:outline-none focus:ring focus:border-indigo-300 transition duration-300 ease-in-out ">
    <Link to='/therepistconnection'>
    Consult with our Therapists

    </Link>
  
</button>
</div>  
<Footer/>


    </>
  )
}

export default Therapist