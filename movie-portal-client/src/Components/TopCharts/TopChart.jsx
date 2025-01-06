import React, { useContext } from 'react';
import { FaCrown } from 'react-icons/fa';
import { ThemeContext } from '../../Provider/ThemeProvider';

const TopChart = () => {
  const { theme} = useContext(ThemeContext);
  const movies = [
    { rank: 1, title: 'Moana 2', gross: '$239M', releaseDate: 'Nov 25, 2024', studio: 'Disney' },
    { rank: 2, title: 'Wicked', gross: '$275M', releaseDate: 'Nov 22, 2024', studio: 'Universal' },
    { rank: 3, title: 'Gladiator II', gross: '$116M', releaseDate: 'Nov 22, 2024', studio: 'Paramount' },
    { rank: 4, title: 'Red One', gross: '$77M', releaseDate: 'Nov 15, 2024', studio: 'Amazon' },
    { rank: 5, title: 'The Best Christmas Pageant Ever', gross: '$32M', releaseDate: 'Nov 8, 2024', studio: 'Lionsgate' },
  ];

  return (
    <div className={`bg-gradient-to-b  p-8 max-w-screen-2xl w-11/12 mx-auto rounded-2xl shadow-2xl mb-8
      ${
        theme === "light" ? "from-gray-100 via-gray-200 to-gray-300" : "text-black"}
    `}>
      <h1 className={`text-4xl font-bold text-left border-black border-l-4 pl-4
        ${
          theme === "light" ? "text-black" : "text-white"}
        `}>
        🎬 Top Box Office Movies (Dec 2024)
      </h1>
      <h1 className={`text-xl font-normal text-left mb-8 border-black border-l-4 pl-4
              ${
          theme === "light" ? "text-black" : "text-white"}`}>
      Weekend of November 29-December 1
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4 text-left font-bold">Rank</th>
              <th className="p-4 text-left font-bold">Movie</th>
              <th className="p-4 text-left font-bold">Studio</th>
              <th className="p-4 text-left font-bold">Gross</th>
              <th className="p-4 text-left font-bold">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr
                key={movie.rank}
                className={`rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                <td className="p-4 text-center text-xl">
                  {movie.rank <= 3 ? <FaCrown className="text-yellow-500 inline mr-2" /> : null}
                  <span className="font-bold">{movie.rank}</span>
                </td>
                <td className="p-4 font-semibold">{movie.title}</td>
                <td className="p-4 text-blue-800">{movie.studio}</td>
                <td className="p-4 text-green-700 font-bold">{movie.gross}</td>
                <td className="p-4 text-sm text-neutral-600">{movie.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopChart;
