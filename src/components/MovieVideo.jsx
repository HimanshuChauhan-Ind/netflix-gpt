import useGetTrailer from "../assets/useGetTrailer";
import { useSelector } from "react-redux";

const MovieVideo = ({ movieId }) => {
  useGetTrailer(movieId);

  return (
    <div className="z-20">
      <iframe
        className="w-full aspect-video absolute top-0"
        src={
          "https://www.youtube.com/embed/" +
          useSelector(
            (state) => state.movies.mainTrailer + "?&autoplay=1&mute=1"
          )
        }
        title="WATCH the BRAVEST Scene in the History of Indian Cinema, &amp; Fraud of BJP, CONGRESS, &amp; INDIA Alliance"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
