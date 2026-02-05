import React from 'react'

const Subscribe = () => {
  return (
    <>
   <section className="py-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-3">
          Subscribe to our newsletter
        </h2>

        <p className="text-sm text-gray-400 mb-8">
          Stay updated! Subscribe to our mailing list for news, updates, and exclusive offers.
        </p>

       <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 mx-auto max-w-lg
          border border-gray-200 rounded-2xl sm:rounded-full p-2 focus-within:border-black focus-within:ring-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-gray-800 outline-none bg-transparent"
          />

            <button
              className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full bg-teal-600 hover:bg-teal-700
                text-white transition font-medium cursor-pointer">
              Subscribe
             </button>
       </div>
    </div>
</section>

    </>
  )
}

export default Subscribe