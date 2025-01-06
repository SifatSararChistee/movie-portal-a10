import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedMovieCard from '../../Components/FeaturedMovies/FeaturedMovieCard';

const AllMoviesPage = () => {
    const movies = useLoaderData()
    const [moviesData, setMoviesData]=useState(movies)
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        fetch(`https://movie-portal-server-ecru.vercel.app/movies?searchParams=${searchTerm}`)
    .then(res=>res.json())
    .then(data=>setMoviesData(data))
    },[searchTerm])

    return (
        <div className='mb-10'>
            <h1 className='text-4xl font-bold text-center my-8'>
                All Movies
            </h1>
            <form className="flex items-center gap-2 my-4 w-2/4 mx-auto">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border-2 border-black rounded focus:outline-none focus:border-blue-700"
      />

    </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto w-11/12 place-items-center">
                {
                    moviesData.map(movie=> <FeaturedMovieCard key={movie._id} movie={movie}></FeaturedMovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMoviesPage;