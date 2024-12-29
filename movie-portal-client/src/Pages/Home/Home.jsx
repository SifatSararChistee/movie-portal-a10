import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import ExclusiveVideos from "../../Components/ExclusiveVideos/ExclusiveVIdeos";
import TopChart from "../../Components/TopCharts/TopChart";
import FeaturedMovies from "../../Components/FeaturedMovies/FeaturedMovies";



const Home = () => {
    const movies = useLoaderData()
    return (
        <div>
                    <Banner></Banner>
                    <FeaturedMovies movies={movies}></FeaturedMovies>
                    <ExclusiveVideos></ExclusiveVideos>
                    <TopChart></TopChart>
        </div>
    );
};

export default Home;