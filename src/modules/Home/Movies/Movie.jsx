import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Movie.scss";
import { getmovieAPI } from "../../../apis/movieAPI";
import { Card } from "antd";
import ReactPlayer from "react-player";
function Movie() {
  const [movies, setmovies] = useState([]);
  const navigate = useNavigate();
  const getMovies = async () => {
    try {
      const data = await getmovieAPI();
      setmovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container" id="LichChieu">
      <h1 className="text-center color mt-5 mb-3">Lịch Chiếu</h1>
      <div className="row justify-content-center">
        {movies.map((item, index) => {
          if (index < 8) {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card mb-2">
                  <img style={{ height: "400px" }} src={item.hinhAnh} />
                  <div className="card-body">
                    <p className="card-text">{item.tenPhim}</p>
                    Ngày khởi chiếu
                    <p className="card-date_publish">{item.ngayKhoiChieu}</p>
                    <button
                      className="card-button"
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModalCenter" + item.maPhim}
                    >
                      Chi tiết
                    </button>
                    <NavLink
                      to={`/movies/${item.maPhim}`}
                      className="card-button text-dark p-2 ms-5"
                      style={{ textDecoration: "none" }}
                    >
                      MUA VÉ
                    </NavLink>
                    <div
                      className="modal fade"
                      id={"exampleModalCenter" + item.maPhim}
                      tabIndex={item.maPhim}
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content background-video">
                          <div className="modal-body">
                            <button
                              type="button"
                              className="btn video__button-modal"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              x
                            </button>
                            <iframe
                              className="w-100"
                              height="300"
                              src={item.trailer}
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Movie;
