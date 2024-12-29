import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router';

const UpdatePage = () => {
  const movie = useLoaderData();
  const { title, poster, _id, genre, duration, releaseYear, rating, summary } = movie;
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    poster: poster || '',
    title: title || '',
    genre: genre || '',
    duration: duration || '',
    releaseYear: releaseYear || '',
    rating: rating || 0,
    summary: summary || '',
  });

  const navigate = useNavigate();
  const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance'];
  const releaseYears = [2024, 2023, 2022, 2021, 2020];

  const validateForm = () => {
    if (!formData.poster || !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(formData.poster)) {
      toast.error("Please provide a valid poster URL!");
      return false;
    }
    if (!formData.title || formData.title.length < 2) {
      toast.error("Title must be at least 2 characters long!");
      return false;
    }
    if (!formData.genre) {
      toast.error("Please select a genre!");
      return false;
    }
    if (!formData.duration || formData.duration <= 60) {
      toast.error("Duration must be greater than 60 minutes!");
      return false;
    }
    if (!formData.releaseYear) {
      toast.error("Please select a release year!");
      return false;
    }
    if (formData.rating === 0) {
      toast.error("Please select a rating!");
      return false;
    }
    if (!formData.summary || formData.summary.length < 10) {
      toast.error("Summary must be at least 10 characters long!");
      return false;
    }
    return true;
  };
  

  const handleUpdate = (e) => {
    e.preventDefault();
  
    // Validate form data
    if (!validateForm()) {
      return; // Exit the function if validation fails
    }
  
    const movieData = {
      ...formData,
      email: user.email,
    };
  
    fetch(`https://movie-portal-server-ecru.vercel.app/movie-details/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Movie Updated successfully!');
          navigate('/movies');
        } else {
          toast.error('Failed to update the movie!');
        }
      })
      .catch(() => toast.error('An error occurred while updating the movie.'));
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Movie Details of <span className="text-blue-500">{title}</span>
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Movie Poster (URL):</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.poster}
            onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Movie Title:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Genre:</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.genre}
            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          >
            <option value="" disabled>
              Select a genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Duration (in minutes):</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Release Year:</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.releaseYear}
            onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
          >
            <option value="" disabled>
              Select a year
            </option>
            {releaseYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rating:</label>
          <Rating
            onClick={(rate) => setFormData({ ...formData, rating: rate })}
            ratingValue={formData.rating}
            className="rating"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Summary:</label>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.summary}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
