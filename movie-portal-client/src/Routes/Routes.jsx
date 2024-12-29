import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AddMoviePage from "../Pages/AddmoviePage/AddMoviePage";
import AllMoviesPage from "../Pages/AllMoviesPage/AllMoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import PrivateRoute from "./PrivateRoute";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import BestMovies2024 from "../Pages/BestOf2024/BestMovies2024";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=> fetch("https://movie-portal-server-ecru.vercel.app/movies/highest-rated")
        },
        {
            path:"/movies",
            element:<AllMoviesPage></AllMoviesPage>,
            loader: ()=> fetch("https://movie-portal-server-ecru.vercel.app/movies")
        },
        {
            path:"/add-movie",
            element:<PrivateRoute>
                        <AddMoviePage></AddMoviePage>
                    </PrivateRoute>
        },
        {
            path:"/movie-details/:id",
            element: 
            <PrivateRoute>
                <MovieDetailsPage></MovieDetailsPage>
            </PrivateRoute>,
            loader: ({params})=> fetch(`https://movie-portal-server-ecru.vercel.app/movie-details/${params.id}`)
        },
        {
            path:"/favorites",
            element:<PrivateRoute>
                        <FavoritesPage></FavoritesPage>
                    </PrivateRoute>,
            loader: ()=> fetch("https://movie-portal-server-ecru.vercel.app/favorites")
        },
        {
            path:"/best-of-2024",
            element: <BestMovies2024></BestMovies2024>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/update/:id",
            element: <PrivateRoute>
                        <UpdatePage></UpdatePage>
                    </PrivateRoute>,
                    loader: ({params})=> fetch(`https://movie-portal-server-ecru.vercel.app/movie-details/${params.id}`)
        },
      ]
    },
  ]);


  export default router;