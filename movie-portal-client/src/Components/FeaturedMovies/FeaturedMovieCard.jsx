import React from "react";
import { Link, useLocation } from "react-router";
import toast from "react-hot-toast";

const FeaturedMovieCard = ({ movie, setMovies, movies }) => {
  const { title, poster, _id, genre, duration, releaseYear, rating } = movie;
  const location = useLocation();

  const handleDeleteBtn = async (_id) => {
    try {
      const response = await fetch(`https://movie-portal-server-ecru.vercel.app/favorites/${_id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.deletedCount > 0) {
        setMovies(movies.filter((movie) => movie._id !== _id));
        toast.success("Deleted from Favorites");
      } else {
        toast.error("Failed to Delete");
      }
    } catch (error) {
      toast.error("Error deleting movie.");
    }
  };

  return (
<div className="card w-11/12 relative group">
  <div className="h-1/2">
    <img
      src={poster}
      alt={`${title} Poster`}
      className="w-full h-[400px] rounded-xl"
    />
  </div>
  <div className="w-full h-full rounded-xl absolute hidden group-hover:flex flex-col justify-center items-center text-white bg-black/70 p-4 space-y-4 font-bold transition-all duration-300">
    <h3 className="font-bold text-xl">{title}</h3>
    <div className="flex items-center gap-4">
      <p>{genre}</p>
      <p>| {duration} min</p>
      <p>| {releaseYear}</p>
    </div>
    <p className="flex items-center gap-1 text-yellow-500">
      Rating: ⭐ {rating}/5
    </p>
    <div className="card-actions justify-end flex gap-4">
    {location.pathname === "/favorites"? '' :    <Link to={`/movie-details/${_id}`}>
        <button className="btn btn-primary hover:bg-blue-300 hover:text-black hover:font-bold">See Details</button>
      </Link> }
      {location.pathname === "/favorites" && (
        <button
          onClick={() => handleDeleteBtn(_id)}
          aria-label="Delete from Favorites"
          className="btn btn-danger w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
        >
          Delete from Favorites
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default FeaturedMovieCard;
