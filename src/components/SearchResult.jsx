import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const movies = useSelector((state) => state.gpt);

  if (!movies.movieNames) {
    return null;
  }

  return (
    <div className="pt-[25%]">
      {movies.movieNames.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={movies.movieResults[index]}
        />
      ))}
    </div>
  );
};

export default SearchResult;
