import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt="ape"
            />
          </div>

          <div className='text-center p-5 space-y-2'>
            <h1 className="text-4xl font-bold text-white">Thirdweb Apes</h1>
            <h2 className="text-xl text-gray-300">
              A Collection of Apes for Next &amp; React enthusiasts
            </h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
          {/* Header */}
          <header className='flex items-center justify-between'>
            <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The <span className='font-extrabold underline decoration-pink-600/50'>Thidweb</span> NFT Marketplace</h1>
            <button className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>Sign In</button>
          </header>
          <hr className='my-2 border'/>
          {/* Content */}
          {/* Mint Button */}
      </div>
    </div>
  )
}

export default NFTDropPage
