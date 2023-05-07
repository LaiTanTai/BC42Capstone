import React from "react";
import Movieinfo from "./Movieinfo/Movieinfo";
import Showtime from "./Showtime/Showtime";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const { movieId } = useParams();
  return (
    <>
      <Movieinfo movieID={movieId} />
      <Showtime movieID={movieId} />
    </>
  );
}

export default MovieDetails;
