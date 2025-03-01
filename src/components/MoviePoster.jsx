import { TMDB_POSTER_URL } from "../assets/constants";

const MoviePoster = ({ posterKey }) => {
  return (
    <div className="flex-shrink-0">
      <img alt="movie-poster" src={TMDB_POSTER_URL + posterKey}></img>
    </div>
  );
};

export default MoviePoster;
