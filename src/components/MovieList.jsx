import { useRef } from "react";
import MoviePoster from "./MoviePoster";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  if (!movies) return null;

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative p-5">
      <h2 className="pb-2 text-2xl text-white">{title}</h2>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll hide-scrollbar gap-4 scroll-smooth"
      >
        {movies.map((movie) => (
          <MoviePoster key={movie.id} posterKey={movie?.poster_path} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
        onClick={scrollRight}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default MovieList;
