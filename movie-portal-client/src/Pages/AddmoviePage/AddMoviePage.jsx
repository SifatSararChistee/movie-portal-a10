import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const AddMoviePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance'];
  const releaseYears = [2024, 2023, 2022, 2021, 2020];

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      poster: '',
      title: '',
      genre: '',
      duration: '',
      releaseYear: '',
      rating: 0,
      summary: '',
    },
  });

  const onSubmit = (data) => {
    const movieData = {
      ...data,
      email: user.email,
    };

    // Send data to the server
    fetch('https://movie-portal-server-ecru.vercel.app/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.insertedId) {
          toast.success('Movie added successfully!');
          navigate('/movies');
        } else {
          toast.error('Failed to add the movie!');
        }
      })
      .catch(() => toast.error('An error occurred while adding the movie.'));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Movie Poster (URL):</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('poster', {
              required: 'Poster URL is required',
              pattern: {
                value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/,
                message: 'Please provide a valid image URL!',
              },
            })}
          />
          {errors.poster && <p className="text-red-500 text-sm">{errors.poster.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Movie Title:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 2,
                message: 'Title must be at least 2 characters long!',
              },
            })}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Genre:</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('genre', { required: 'Please select a genre!' })}
          >
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Duration (in minutes):</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('duration', {
              required: 'Duration is required',
              min: {
                value: 60,
                message: 'Duration must be greater than 60 minutes!',
              },
            })}
          />
          {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Release Year:</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('releaseYear', { required: 'Please select a release year!' })}
          >
            <option value="">Select a year</option>
            {releaseYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.releaseYear && <p className="text-red-500 text-sm">{errors.releaseYear.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rating:</label>
          <Rating
            onClick={(rate) => setValue('rating', rate)}
            ratingValue={0}
            className="rating"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Summary:</label>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register('summary', {
              required: 'Summary is required',
              minLength: {
                value: 10,
                message: 'Summary must be at least 10 characters long!',
              },
            })}
          />
          {errors.summary && <p className="text-red-500 text-sm">{errors.summary.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMoviePage;
