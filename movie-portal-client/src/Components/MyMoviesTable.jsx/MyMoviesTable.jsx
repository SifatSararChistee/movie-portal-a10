import React from 'react';

const MyMoviesTable = ({movie}) => {
    const { title, poster, _id, genre, duration, releaseYear, rating } = movie;
    return (
<div className="overflow-x-auto bg-white rounded-xl shadow-md my-6">
  <table className="table table-zebra bg-white w-full text-sm">
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        <th className="px-4 py-2 text-center">Poster</th>
        <th className="px-4 py-2 text-center">Movie Title</th>
        <th className="px-4 py-2 text-center hidden md:table-cell">Genre</th>
        <th className="px-4 py-2 text-center hidden lg:table-cell">Duration</th>
        <th className="px-4 py-2 text-center hidden lg:table-cell">Release Year</th>
        <th className="px-4 py-2 text-center">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 text-center">
          <div className="flex items-center justify-center">
            <img
              src={poster}
              alt={title}
              className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md shadow"
            />
          </div>
        </td>
        <td className="px-4 py-2 text-center font-medium">{title}</td>
        <td className="px-4 py-2 text-center hidden md:table-cell">{genre}</td>
        <td className="px-4 py-2 text-center hidden lg:table-cell">{duration}</td>
        <td className="px-4 py-2 text-center hidden lg:table-cell">{releaseYear}</td>
        <td className="px-4 py-2 text-center font-bold text-green-600">
          {rating}/5
        </td>
      </tr>
    </tbody>
  </table>
</div>

    );
};

export default MyMoviesTable;