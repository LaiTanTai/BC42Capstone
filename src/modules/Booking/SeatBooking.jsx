import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBooking.module.scss";
import { getDataTicket } from "../../apis/bookingAPI";
import "./SeatBooking.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SeatBooking({ movieID }) {
  const dispatch = useDispatch();
  const { dataTicket, isLoading, error } = useSelector(
    (state) => state.getDataTicketReducer
  );

  console.log(dataTicket);
  useEffect(() => {
    dispatch(getDataTicket(movieID));
  }, []);

  const RenderBookingTicket = () => {
    if (isLoading)
      return <h1 className="text-center text-success">Loading...</h1>;
    if (error) return <h1 className="text-center text-danger">error</h1>;
    if (dataTicket) {
      return (
        <div style={{ marginLeft: "73px" }}>
          {dataTicket?.content?.danhSachGhe.map((item, index) => {
            let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDat = item.daDat === true ? "gheDaDat" : "";
            return (
              <div className={styles.maGhe} key={index}>
                <button
                  disabled={item.daDat}
                  key={index}
                  type="button"
                  className={`ghe ${classGheVip} ${classGheDat}`}
                >
                  {item.daDat ? <FontAwesomeIcon icon={faXmark} /> : item.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ""}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="container-fluid">
      <RenderBookingTicket />
    </div>
  );
}

export default SeatBooking;
