import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="absolute z-40 bg-black">
      <div className="-mt-90 ">
        <MovieList title="Now Playing" movies={movies.nowPlaying} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
