import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl bg-slate-900 
                    px-4 sm:px-6 mt-10 text-center text-white 
                    py-14 sm:py-20 flex flex-col items-center">

      <p className="text-indigo-500 font-medium">
        Get updated
      </p>

      <h1 className="max-w-xl font-semibold text-2xl sm:text-3xl md:text-4xl 
                     leading-tight mt-3">
        Subscribe to our newsletter & get the latest news
      </h1>

      {/* Input wrapper */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 
                      mt-8 border border-white/30 
                      focus-within:outline focus-within:outline-white/50
                      rounded-full w-full max-w-md px-1 py-1">

        <input
          type="email"
          className="bg-transparent outline-none px-4 py-3 
                     w-full text-sm text-white placeholder:text-slate-400"
          placeholder="Enter your email address"
        />

        <button className="bg-red-700 text-white rounded-full 
                           px-6 py-3 text-sm sm:w-small sm:px-1 sm:py-2 sm:text-sm
                            w-[150px] 
                           flex items-center justify-center 
                           hover:bg-red-600 transition">
          Subscribe now
        </button>
      </div>
    </div>
  )
}

export default Newsletter
