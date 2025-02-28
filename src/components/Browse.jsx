import useGetMovieData from "../assets/useGetMovieData";
import Header from "./Header";
import MainContent from "./MainContent";

const Browse = () => {
  useGetMovieData();

  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default Browse;
