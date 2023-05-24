import React, { useState, useEffect } from "react";
import { getMovieDetail } from "../../../apis/movieAPI";

function Movieinfo({ movieId }) {
  const [movie, setMovie] = useState({});

  const getMovieDetails = async () => {
    try {
      const data = await getMovieDetail(movieId);
      setMovie(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return <></>;
}

export default Movieinfo;
