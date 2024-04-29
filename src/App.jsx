import React, { useState } from 'react'
import Cards from './Cards'
//scale 3af207

const App = () => {
  const urlBase = 'api.themoviedb.org/3/movie'
  const API_KEY = '738a868f38e105fd1a1fc07338653dc4'


  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  const handleInputChange = (e) => {
    setBusqueda(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }
  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data)
      return data
      //setPeliculas(data)
      
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <div className=' grid place-items-center  lg:mt-4'  >
        <div className='flex '>
          <h4 className='text-3xl text-center font-bold text-white '>Magic Movies</h4>
        </div>

        <form className='mt-6 flex gap-4' onSubmit={handleSubmit}>
          <button type='submit' className=' p-4 border-2 border-white rounded-lg text-2xl hover:bg-[#3af207] text-white'>Search Movies</button>
          <input
            type="text"
            className='text-center w-96 rounded-lg text-2xl   '
            placeholder='Enter movie to search'
            value={busqueda}
            onChange={handleInputChange}
          />

        </form>

        <div className='grid grid-cols-4 gap-10 place-content-center'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />


        </div>



      </div>
    </>
  )
}

export default App