import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const MovieDetailsPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
    const movie = useLoaderData()
    const navigate=useNavigate()
    const {title, poster, _id, genre, duration, releaseYear, rating , summary, email}= movie

    const handleDeleteBtn=(_id)=>{
      fetch(`https://movie-portal-server-ecru.vercel.app/movies/${_id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          toast.success("Deleted Successfully")
          navigate("/movies")
        }else{
          toast.error("Failed to Delete")
        }
      })
    }
    const handleFavoriteBtn=()=>{
      fetch("https://movie-portal-server-ecru.vercel.app/favorites",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
      .then(res => res.json())
      .then (data =>{
      })
      setIsDisabled(true)
      toast.success('Movie added to favorites');
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <div className="card bg-base-100 shadow-lg max-w-5xl w-full flex flex-col sm:flex-row rounded-lg overflow-hidden">
          {/* Left side - Poster */}
          <div className="w-full sm:w-1/3 p-4">
            <img 
              src={poster} 
              alt={`${title} Poster`} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
  
          {/* Right side - Movie Details */}
          <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 hover:text-primary transition-all duration-300">{title}</h3>
            <p className="text-xl italic text-gray-600 mb-2">Genre: <span className="font-semibold text-primary">{genre}</span></p>
            <p className="text-lg text-gray-600 mb-2">Runtime: <span className="font-medium">{duration}</span> min</p>
            <p className="text-lg text-gray-600 mb-2">Released In: <span className="font-medium">{releaseYear}</span></p>
            <p className="text-lg text-gray-700 mb-4">{summary}</p>
            <p className="text-lg text-gray-600 mb-2">Added by: <span className="font-medium text-gray-800">{email}</span></p>
            <p className="text-xl text-yellow-500 flex items-center gap-1 mb-4">
              Rating: <span className="text-2xl font-bold">⭐ {rating}/5</span>
            </p>
  
            <div className="flex gap-4 mt-4">
              <Link>
                <button disabled={isDisabled} onClick={()=>handleFavoriteBtn()} className="btn btn-primary w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-blue-500 transition duration-300">Add to Favorites</button>
              </Link>
              <Link to={`/update/${_id}`}>
                <button className="btn-primary btn w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-blue-500 transition duration-300">Update Movie</button>
              </Link>

                <button onClick={()=>handleDeleteBtn(_id)} className="btn bg-red-500 w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-red-300 transition duration-300">Delete</button>
            </div>
          </div>
        </div>
        <div className='mt-6'>
        <Link to={'/movies'}>
        <button className="btn btn-primary w-full sm:w-auto py-2 px-4 text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300">See all Movies</button>
        </Link>
        </div>
      </div>
    );
};

export default MovieDetailsPage;