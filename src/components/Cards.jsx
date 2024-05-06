import React from 'react';

const Cards = ({ peliculas }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 place-content-center mt-10  rounded-lg'>
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} className='border-2 rounded-lg '>
          <h3 className='text-2xl font-bold mt-2 text-center text-white'>{pelicula.title}</h3>
          <img className="object-cover border-2 rounded-lg mt-10"src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
          <p className='font-thin text-white mt-1'>{pelicula.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;