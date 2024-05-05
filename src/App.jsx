import React, { useState } from 'react'
import Cards from './components/Cards'


const App = () => {
  const urlBase = 'https://api.themoviedb.org/3/search/movie'
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
      setPeliculas(data.results)

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className=' container mx-auto'  >
        <div className='flex justify-center  mt-4 '>
          <h4 className='text-3xl text-center font-bold  '>Magic Movies</h4>
        </div>

        <form className='grid grid-cols-1 lg:mt-14 lg:flex gap-10 place-content-center' onSubmit={handleSubmit}>
          <button type='submit' className='bg-gray-200 p-4 lg:p-0 border-2 rounded-lg text-2xl w-40 h-24 lg:w-60 lg:h-10 hover:bg-[#3af207] mt-10 lg:mt-0 mx-auto  border-black'>Search Movies</button>
          <input
            type="text"
            className='text-center w-60 mx-auto lg:w-96 rounded-lg text-2xl border-2 border-black bg-gray-200 '
            placeholder='Enter movie to search'
            value={busqueda}
            onChange={handleInputChange}
          />
        </form>


        <Cards peliculas={peliculas} />

        <div>
        </div>
      </div>
    </>
  )
}

export default App