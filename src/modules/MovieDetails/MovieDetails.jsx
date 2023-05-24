import React from "react";
import Movieinfo from "./Movieinfo/Movieinfo";
import Showtime from "./Showtime/Showtime";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const { movieID } = useParams();
  console.log(movieID);
  return (
    <div >
      <Movieinfo movieID={movieID} />
      <Showtime movieID={movieID} />
    </div>
  );
}

export default MovieDetails;
