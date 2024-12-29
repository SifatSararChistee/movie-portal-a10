import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedMovieCard from '../../Components/FeaturedMovies/FeaturedMovieCard';

const FavoritesPage = () => {
  const favoriteMovies = useLoaderData();
  const [movies, setMovies] = useState(favoriteMovies);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">
        Favorite Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-11/12">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <FeaturedMovieCard
              key={movie._id}
              movie={movie}
              setMovies={setMovies}
              movies={movies}
            />
          ))
        ) : (
          <p className="text-center text-lg">No favorite movies found.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
