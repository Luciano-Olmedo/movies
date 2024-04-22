import React from 'react'
//scale 3af207

const App = () => {
  return (
    <>
      <div className=' grid place-items-center  lg:mt-4'  >
        <div className='flex '>
          <h4 className='text-3xl text-center font-bold text-white '>Magic Movies</h4>
        </div>
        <div className='mt-6 flex gap-4'>
          <button className=' p-4 border-2 border-white rounded-lg text-2xl hover:bg-[#3af207] text-white'>Search Movies</button>
          <input 
          type="text" 
          className='text-center w-96 rounded-lg text-2xl   '
          placeholder='Enter movie to search' />
        </div>
      </div>


    </>
  )
}

export default App