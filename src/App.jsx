import React, { useState } from 'react'
//import Cards from './Cards'
//scale 3af207

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
      <div className=' grid place-items-center  lg:mt-4'  >
        <div className='flex '>
          <h4 className='text-3xl text-center font-bold  '>Magic Movies</h4>
        </div>

        <form className='mt-6 flex gap-4' onSubmit={handleSubmit}>
          <button type='submit' className=' p-4 border-2 rounded-lg text-2xl hover:bg-[#3af207] '>Search Movies</button>
          <input
            type="text"
            className='text-center w-96 rounded-lg text-2xl   '
            placeholder='Enter movie to search'
            value={busqueda}
            onChange={handleInputChange}
          />

        </form>

        <div className='grid grid-cols-4 gap-10 place-content-center'>
          {peliculas.map((pelicula) => (
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />

            </div>
          ))}


        </div>
        <div>

        </div>

      </div>
    </>
  )
}

export default App