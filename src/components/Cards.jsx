import React from 'react';

const Cards = ({ peliculas }) => {
  return (
    <div className='lg:grid-cols-2  lg:gap-4 lg:mt-10 grid grid-cols-1 gap-4 '>
      {peliculas.map((pelicula) => (
        <article key={pelicula.id} className=' flex lg:h-[226px] lg:w-[480px] h-[260px] mx-auto rounded-3xl bg-white p-8 hover:shadow-inner hover:shadow-green-800 cursor-pointer transition-all duration-500 hover:scale-105'>

          <div>
            <h2 className="text-xl font-bold">{pelicula.title}</h2>
            <p className="mt-3 text-[12px] lg:text-sm text-[#424242] line-clamp-5">{pelicula.overview}</p>
          </div>
          <img className="lg:h-[156px] lg:w-[180px] w-[120px] h-[100px] rounded-3xl object-cover  " src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
        </article>
      ))}
    </div>
  );
};


  export default Cards;