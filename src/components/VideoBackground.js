import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Call the custom Hooks for fetching the background movie trailer video from the API server.
  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;