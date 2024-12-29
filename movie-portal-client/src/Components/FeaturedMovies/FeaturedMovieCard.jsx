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
    <div className="card bg-base-100 shadow-lg w-11/12 h-[600px]">
      <figure>
        <img
          src={poster}
          alt={`${title} Poster`}
          className="w-full h-auto object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-2xl font-bold">{title}</h3>
        <p className="italic text-gray-500">Genre: {genre}</p>
        <p className="text-sm text-gray-600">Runtime: {duration} min</p>
        <p className="text-sm text-gray-600">Released In: {releaseYear}</p>
        <p className="flex items-center gap-1 text-yellow-500">
          Rating: ⭐ {rating}/5
        </p>
        <div className="card-actions justify-end">
          <Link to={`/movie-details/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
          {location.pathname === "/favorites" && (
            <button
              onClick={() => handleDeleteBtn(_id)}
              className="btn btn-danger w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300"
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
