import MainMovie from "./MainMovie";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MainContent = () => {
  const movie = useSelector((state) => state.movies.nowPlaying);
  if (!movie) return;

  const { id, original_title, overview } = movie[0];

  console.log(movie[0]);

  return (
    <div>
      <MainMovie movieId={id} title={original_title} overview={overview} />
      <MovieList />
    </div>
  );
};

export default MainContent;
