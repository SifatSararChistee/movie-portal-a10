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
    <div className="card w-11/12">
      <div className="h-1/2">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="w-full h-[400px] rounded-xl"
        />
      </div>
      <div className="w-full absolute top-56 text-white hover:bg-white hover:text-black flex items-center flex-col p-4 rounded-t-3xl space-y-2 font-bold">
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="flex items-center gap-2">
        <p className="">{genre}</p>||
        <p className="text-sm "> {duration} min</p>||
        <p className="text-sm ">{releaseYear}</p>
        </div>
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
