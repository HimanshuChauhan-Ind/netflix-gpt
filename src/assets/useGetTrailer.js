import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../assets/constants";
import { useDispatch } from "react-redux";
import { addMainTrailer } from "../assets/movieSlice";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const trailerKey = json.results.filter(
      (video) => video.type === "Trailer"
    )[0];
    dispatch(addMainTrailer(trailerKey.key));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetTrailer;
