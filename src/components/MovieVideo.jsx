import useGetTrailer from "../assets/useGetTrailer";
import { useSelector } from "react-redux";

const MovieVideo = ({ movieId }) => {
  useGetTrailer(movieId);
  const trailerId = useSelector((state) => state.movies.mainTrailer);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailerId
        }
        title="WATCH the BRAVEST Scene in the History of Indian Cinema, &amp; Fraud of BJP, CONGRESS, &amp; INDIA Alliance"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
