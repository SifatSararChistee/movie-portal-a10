import { useContext } from "react";
import FeaturedMovieCard from "./FeaturedMovieCard";
import { ThemeContext } from "../../Provider/ThemeProvider";

const FeaturedMovies = ({ movies }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`mt-8 mx-auto w-11/12 p-8 rounded-3xl ${
                theme === "light" ? "bg-gray-100" : "bg-gray-800"
            }`}
        >
            <h2
                className={`text-4xl font-bold text-left border-l-4 pl-4 ${
                    theme === "light"
                        ? "text-black border-black"
                        : "text-white border-white"
                }`}
            >
                Featured Movies
            </h2>
            <h5 className={`text-xl font-normal text-left mb-8 border-l-4 pl-4 ${
                    theme === "light"
                        ? "text-black border-black"
                        : "text-white border-white"
                }`}>
                Top rated movies just for you
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-11/12 place-items-center">
                {movies.map((movie) => (
                    <FeaturedMovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedMovies;

