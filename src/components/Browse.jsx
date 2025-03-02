import { useSelector } from "react-redux";
import useGetMovieData from "../assets/useGetMovieData";
import useGetPopularMovies from "../assets/useGetPopularMovies";
import useGetTopRatedMovies from "../assets/useGetTopRatedMovies";
import useGetUpcomingMovies from "../assets/useGetUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContent from "./MainContent";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

  useGetMovieData();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContent />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
