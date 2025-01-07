import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyMoviesTable from '../../Components/MyMoviesTable.jsx/MyMoviesTable';
import { NavLink } from 'react-router';

const MyMovies = () => {
    const {user}=useContext(AuthContext)
    const [movies, setMovies]=useState([])
        useEffect(() => {
            fetch(`https://movie-portal-server-ecru.vercel.app/movies/${user?.email}`)
            .then(res=>res.json())
            .then(data=>setMovies(data))
        }, []);
    return (
        <div className='mb-10 max-w-screen-2xl mx-auto'>
        <h1 className="text-4xl font-bold text-center my-8">
        {user?.displayName}'s Movies
        </h1>
        <div className="grid grid-cols-1 mx-auto w-11/12">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MyMoviesTable
                key={movie._id}
                movie={movie}
              />
            ))
          ) : (
            <p className="text-center text-lg">No movies found. You have not added any movies
            </p>
          )}
        </div>
      </div>
    );
};

export default MyMovies;