import MainMovie from "./MainMovie";
import MovieVideo from "./MovieVideo";
import { useSelector } from "react-redux";

const MainContent = () => {
  const movie = useSelector((state) => state.movies.nowPlaying);
  if (!movie) return;

  const { id, original_title, overview } = movie[0];

  return (
    <div className="relative">
      <MainMovie title={original_title} overview={overview} />
      <MovieVideo movieId={id} />
    </div>
  );
};

export default MainContent;
