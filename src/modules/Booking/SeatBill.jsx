import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBill.module.scss";
import { getDataTicket } from "../../apis/bookingAPI";

function SeatBill({ movieID }) {
  const dispatch = useDispatch();
  console.log(movieID);

  const { dataTicket } = useSelector((state) => state.getDataTicketReducer);

  console.log(dataTicket);

  useEffect(() => {
    dispatch(getDataTicket(movieID));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center text-success mt-3">500000VND</h1>
        <hr />
      </div>
      <div className={styles.dataInfor}>
        <h6>cụm rạp:</h6>
        <h6 className="text-success">BHD Star Cineplex - Phạm Hùng</h6>
      </div>
      <hr />
      <div className={styles.dataInfor}>
        <h6>Địa chỉ:</h6>
        <h6 className="text-success">L4-Satra Phạm Hùng, C6/27 Phạm Hùng</h6>
      </div>
      <hr />
      <div className={styles.dataInfor}>
        <h6>Rạp:</h6>
        <h6 className="text-success">Rạp 7</h6>
      </div>
      <hr />
      <div className={styles.dataInfor}>
        <h6>Ngày giờ chiếu:</h6>
        <h6 className="text-success">03/11/2022 -08:11</h6>
      </div>
      <hr />
      <div className={styles.dataInfor}>
        <h6>Tên Phim:</h6>
        <h6 className="text-success">Nhà Bà Nữ</h6>
      </div>
      <hr />
      <div className={styles.dataInfor}>
        <h6>Chọn:</h6>
        <h6 className="text-success">Ghế 112, Ghế 134,</h6>
      </div>
      <hr />
      <button className={styles.setButtonTicket} type="button">
        ĐẶT VÉ
      </button>
    </>
  );
}

export default SeatBill;
