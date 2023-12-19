import React from 'react'

const Apps = () => {
  return (
   <>
     <section x-data="{ isOpen: false }" class="w-full min-h-screen bg-white dark:bg-gray-900">
    <div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
       
        <section class="flex items-center flex-1">
            <div class="flex flex-col w-full ">
                <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 mx-5">
                        Coming
                    </span>

                    <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Soon
                    </span>
                </h1>

                <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                Elevate Your Mind: Your Companion to Mental Well-being — Unleashing Potential, Empowering Minds.
                </p>

                <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                    <input id="email" type="text" class="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" />

                    <button class="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                        Notify Me
                    </button>
                </div>

                <p class="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :)</p>
            
            </div>
            
        </section>

        <footer class="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
            <a href="#" class="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Privacy Policy </a>
            

            <div class="mt-4 -mx-4 md:mt-0">
                <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Facebook</a>

                <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Instagram</a>

                <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> LinkedIn</a>
            </div>
        </footer>
    </div>
</section>

   </>
  )
}

export default Apps;