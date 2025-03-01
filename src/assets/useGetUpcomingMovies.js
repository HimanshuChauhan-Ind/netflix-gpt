import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../assets/constants";
import { addUpcomingMovies } from "../assets/movieSlice";
import { useDispatch } from "react-redux";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();

  const movies_data = async function () {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_OPTIONS.headers.Authorization}&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    movies_data();
  }, []);
};

export default useGetUpcomingMovies;
