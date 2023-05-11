import React from "react";
import Movieinfo from "./Movieinfo/Movieinfo";
import Showtime from "./Showtime/Showtime";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const { movieId } = useParams();
  return (
    <div style={{ backgroundColor: "#0a2029" }}>
      <Movieinfo movieID={movieId} />
      <Showtime movieID={movieId} />
    </div>
  );
}

export default MovieDetails;
