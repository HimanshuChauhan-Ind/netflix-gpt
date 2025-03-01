import useGetMovieData from "../assets/useGetMovieData";
import useGetPopularMovies from "../assets/useGetPopularMovies";
import useGetTopRatedMovies from "../assets/useGetTopRatedMovies";
import useGetUpcomingMovies from "../assets/useGetUpcomingMovies";
import Header from "./Header";
import MainContent from "./MainContent";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetMovieData();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContent />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
