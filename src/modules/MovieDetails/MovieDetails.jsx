import React, { useEffect, useState, Fragment } from "react";
import Movieinfo from "./MovieInfo/MovieInfo";
import Showtime from "./ShowTime/ShowTime";
import { layThongTinPhimAPI } from "../../apis/movieAPI";
import { useParams } from "react-router-dom";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
function MovieDetails() {
  const { movieID } = useParams();
  const [phimItem, setPhimItem] = useState();
  const [loading, $loading] = useState(true);
  const layThongTinPhim = async (movieID) => {
    try {
      const data = await layThongTinPhimAPI(movieID);
      console.log(data.content);
      setPhimItem(data.content);
      $loading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    layThongTinPhim(movieID);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <Movieinfo phimItem={phimItem} />
          <Showtime phim={phimItem} maPhim={movieID} />
        </>
      )}
    </Fragment>
  );
}

export default MovieDetails;
