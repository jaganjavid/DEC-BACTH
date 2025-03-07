import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import Singup from "../auth/Singup";
import Signin from "../auth/Signin";
import PrivateRoute from "../auth/PrivateRoute";



export const AllRoutes = () => {
  return (
    <Routes>

       <Route path="/signup" element={<Singup/>}/>
       <Route path="/signin" element={<Signin/>}/>

       <Route path="/" element={
         <PrivateRoute>
            <MovieList apiPath="movie/now_playing" />
         </PrivateRoute>
       }/>
       <Route path="movie/:id" element={
         <PrivateRoute>
          <MovieDetails/>
        </PrivateRoute>
      }/>
       <Route path="movies/popular" element={
         <PrivateRoute>
           <MovieList apiPath="movie/popular"/>
         </PrivateRoute>
       }/>
       <Route path="movies/top" element={
         <PrivateRoute>
          <MovieList apiPath="movie/top_rated"/>
        </PrivateRoute>
      }/>
       <Route path="movies/upcoming" element={ 
        <PrivateRoute>
         <MovieList apiPath="movie/upcoming"/>
        </PrivateRoute>
        }/>
       <Route path="search" element={  
        <PrivateRoute>
         <Search apiPath="search/movie"/>
        </PrivateRoute>
        }/>
       <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}