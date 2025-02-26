import useGetMovieData from "../assets/useGetMovieData";
import Header from "./Header";

const Browse = () => {
  useGetMovieData();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
