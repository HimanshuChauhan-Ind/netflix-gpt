import { useDispatch, useSelector } from "react-redux";
import languageConstants from "../assets/languageConstants";
import useGetMovieRecommendation from "../assets/useGetMovieRecommendation";
import { useRef } from "react";
import { setGPTMovies } from "../assets/gptSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.config.lang);
  const moviePrompt = useRef(null);

  const handleSearch = async () => {
    const movies = await useGetMovieRecommendation(moviePrompt.current.value);
    dispatch(setGPTMovies(movies));
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
