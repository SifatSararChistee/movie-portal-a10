import React from "react";

const moviesData = [
  {
    title: "Dune: Part Two",
    poster: "https://i.ibb.co.com/JzQSR8F/Dune2.jpg",
    releaseYear: 2024,
    runtime: "155 min",
    description: "The saga of Paul Atreides continues in this visually stunning sci-fi epic.",
    director: "Denis Villeneuve",
    stars: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  },
  {
    title: "Wicked",
    poster: "https://i.ibb.co.com/YjmjPVY/wicked.jpg",
    releaseYear: 2024,
    runtime: "120 min",
    description: "The untold story of the witches of Oz comes alive in this musical spectacle.",
    director: "Jon M. Chu",
    stars: ["Cynthia Erivo", "Ariana Grande"],
  },
  {
    title: "Furiosa",
    poster: "https://i.ibb.co.com/2YymSw3/furiosa.jpg",
    releaseYear: 2024,
    runtime: "130 min",
    description: "A high-octane prequel to Mad Max: Fury Road.",
    director: "George Miller",
    stars: ["Anya Taylor-Joy", "Chris Hemsworth"],
  },
  {
    title: "Barbie 2",
    poster: "https://i.ibb.co.com/NN48w39/barbie.jpg",
    releaseYear: 2024,
    runtime: "112 min",
    description: "Barbie returns in another colorful and empowering adventure.",
    director: "Greta Gerwig",
    stars: ["Margot Robbie", "Ryan Gosling"],
  },
  {
    title: "The Kitchen",
    poster: "https://i.ibb.co.com/wrY6MWZ/The-Kitchen.jpg",
    releaseYear: 2024,
    runtime: "150 min",
    description: "A gripping dystopian drama about survival and rebellion.",
    director: "Daniel Kaluuya",
    stars: ["Kane Robinson", "Jedaiah Bannerman"],
  },
  {
    title: "Civil War",
    poster: "https://i.ibb.co.com/rcBt0FW/civil-war.jpg",
    releaseYear: 2024,
    runtime: "145 min",
    description: "A political thriller set during a dystopian future of divided America.",
    director: "Alex Garland",
    stars: ["Kirsten Dunst", "Cailee Spaeny"],
  },
  {
    title: "Oppenheimer 2",
    poster: "https://i.ibb.co.com/9nvj5b1/openheimer.jpg",
    releaseYear: 2024,
    runtime: "140 min",
    description: "A dramatized follow-up on Cold War nuclear tensions.",
    director: "Christopher Nolan",
    stars: ["Cillian Murphy", "Emily Blunt"],
  },
  {
    title: "Caddo Lake",
    poster: "https://i.ibb.co.com/4WM49Hx/caddolake.jpg",
    releaseYear: 2024,
    runtime: "90 min",
    description: "A mystery thriller set in the haunting backdrop of Caddo Lake.",
    director: "Celine Held",
    stars: ["Darren Barret", "Hope Martinez"],
  },
  {
    title: "Orion and the Dark",
    poster: "https://i.ibb.co.com/5LJBgpc/Orion-and-the-Dark.jpg",
    releaseYear: 2024,
    runtime: "100 min",
    description: "A whimsical animated tale about overcoming fears.",
    director: "Sean Charmatz",
    stars: ["Jacob Tremblay", "Paul Walter Hauser"],
  },
  {
    title: "Beetlejuice Beetlejuice",
    poster: "https://i.ibb.co.com/F6Cpk8s/Beetlejuice-Beetlejuice.jpg",
    releaseYear: 2024,
    runtime: "110 min",
    description: "The mischievous ghost returns in a hilarious supernatural sequel.",
    director: "Tim Burton",
    stars: ["Michael Keaton", "Winona Ryder", "Jenna Ortega"],
  },
];


const BestMovies2024 = () => {
  return (
    <div className="bg-base-200 min-h-screen p-6 mt-5 rounded-3xl">
  <div className="container mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-black text-left border-l-4 border-black pl-4">Best Movies of 2024</h1>
      <p className="text-lg text-base-content text-left  border-l-4 border-black pl-4">
        Discover the top-rated movies of 2024, featuring spectacular visuals and unforgettable stories.
      </p>
    </div>

    <ol className="space-y-6">
      {moviesData.map((movie, index) => (
        <li key={index} className="flex items-center space-x-6 p-4 border-b border-base-300">
          <div className="w-1/3">
            <img src={movie.poster} alt={`${movie.title} Poster`} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="w-2/3">
            <h2 className="text-xl font-semibold text-primary">{movie.title}</h2>
            <p className="text-sm text-base-content">
              <strong>Release Year:</strong> {movie.releaseYear}
            </p>
            <p className="text-sm text-base-content">
              <strong>Runtime:</strong> {movie.runtime}
            </p>
            <p className="text-sm text-base-content">
              <strong>Director:</strong> {movie.director}
            </p>
            <p className="text-sm text-base-content">
              <strong>Stars:</strong> {movie.stars.join(", ")}
            </p>
            <p className="mt-2">{movie.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
</div>

  );
};

export default BestMovies2024;
