import { useDispatch, useSelector } from "react-redux";
import languageConstants from "../assets/languageConstants";
import useGetMovieRecommendation from "../assets/useGetMovieRecommendation";
import { useRef } from "react";
import { setGPTMovies } from "../assets/gptSlice";
import { TMDB_API_OPTIONS } from "../assets/constants";

const SearchForm = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.config.lang);
  const moviePrompt = useRef(null);

  const tmdbMovieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const response = await data.json();

    return response.results;
  };

  const handleSearch = async () => {
    const movies = await useGetMovieRecommendation(moviePrompt.current.value);

    const movieArray = movies.split(",");

    const moviePromises = movieArray.map((movie) => tmdbMovieSearch(movie));

    const movieResults = await Promise.all(moviePromises);

    console.log(movieResults);
    dispatch(setGPTMovies({ movieNames: movieArray, movieResults }));
  };

  return (
    <div className="absolute top-1/4 w-full flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 w-2/4"
      >
        <input
          ref={moviePrompt}
          className="bg-white p-4 col-span-9 rounded-xl"
          type="text"
          placeholder={languageConstants[language].query}
        />
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white p-4 col-span-3  ml-4 rounded-xl"
        >
          {languageConstants[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
