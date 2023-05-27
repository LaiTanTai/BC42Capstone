import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBooking.module.scss";
import { getDataTicket } from "../../apis/bookingAPI";
import "./SeatBooking.scss";
import { BOOKING_DAT_VE } from "../../slice/getDataTicketSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SeatBooking({ bookingID }) {
  const dispatch = useDispatch();
  const { dataTicket, isLoading, error, danhSachGheDangDat } = useSelector(
    (state) => state.getDataTicketReducer
  );

  useEffect(() => {
    dispatch(getDataTicket(bookingID));
  }, []);

  const RenderBookingTicket = () => {
    if (isLoading)
      return <h1 className="text-center text-success">Loading...</h1>;
    if (error) return <h1 className="text-center text-danger">error</h1>;
    if (dataTicket) {
      return (
        <div className="seatBooking__Box" style={{ marginLeft: "73px" }}>
          {dataTicket?.content?.danhSachGhe.map((item, index) => {
            let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDaDat = item.daDat === true ? "gheDaDat" : "";

            let classGheDangDat = "";
            let indexGheDangDat = danhSachGheDangDat.findIndex(
              (gheDD) => gheDD.maGhe === item.maGhe
            );

            let classGheDaDuocDat = "";
            if (
              JSON.parse(localStorage.getItem("user"))?.taiKhoan ===
              item.taiKhoanNguoiDat
            ) {
              classGheDaDuocDat = "gheDaDuocDat";
            }
            if (indexGheDangDat !== -1) {
              classGheDaDat = "gheDangDat";
            }
            return (
              <div className={styles.maGhe} key={index}>
                <button
                  onClick={() => {
                    dispatch(BOOKING_DAT_VE(item));
                  }}
                  disabled={item.daDat}
                  key={index}
                  type="button"
                  className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
                >
                  {item.daDat ? <FontAwesomeIcon icon={faXmark} /> : item.stt}
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="seatBooking container-fluid">
      <RenderBookingTicket />
    </div>
  );
}

export default SeatBooking;
