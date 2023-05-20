import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBill.module.scss";
import { getDataTicket } from "../../apis/bookingAPI";
import { BOOKING_DAT_VE } from "./redux/getDataTicketSlice";

function SeatBill({ movieID }) {
  const dispatch = useDispatch();

  const { dataTicket, isLoading, error, danhSachGheDangDat, payTicket } =
    useSelector((state) => state.getDataTicketReducer);
  const infoTicket = dataTicket?.content?.thongTinPhim;
  useEffect(() => {
    dispatch(getDataTicket(movieID));
  }, []);

  const RenderInfoTicket = () => {
    if (isLoading)
      return <h1 className="text-center text-success">Loading...</h1>;
    if (error) return <h1 className="text-center text-danger">error</h1>;
    if (dataTicket)
      return (
        <>
          <div className={styles.dataInfor}>
            <h6>cụm rạp:</h6>
            <h6 className="text-success">{infoTicket.tenCumRap}</h6>
          </div>
          <hr />
          <div className={styles.dataInfor}>
            <h6>Địa chỉ:</h6>
            <h6 className="text-success">{infoTicket.diaChi}</h6>
          </div>
          <hr />
          <div className={styles.dataInfor}>
            <h6>Rạp:</h6>
            <h6 className="text-success">{infoTicket.tenRap}</h6>
          </div>
          <hr />
          <div className={styles.dataInfor}>
            <h6>Ngày giờ chiếu:</h6>
            <h6 className="text-success">
              {infoTicket.ngayChieu} - {infoTicket.gioChieu}
            </h6>
          </div>
          <hr />
          <div className={styles.dataInfor}>
            <h6>Tên Phim:</h6>
            <h6 className="text-success">{infoTicket.tenPhim}</h6>
          </div>
          <hr />
        </>
      );
  };
  return (
    <>
      <div>
        <h1 className="text-center text-success mt-3">{`${payTicket.toLocaleString()}đ `}</h1>
        <hr />
      </div>
      <RenderInfoTicket />
      <div>
        <h6 className="text-center">Chọn:</h6>
        {danhSachGheDangDat.map((gheDD, index) => {
          return (
            <>
              <h5 key={index} className="text-success d-inline">
                {gheDD.stt},
              </h5>
              {(index + 1) % 16 === 0 ? <br /> : ""}
            </>
          );
        })}
        {/* <h6 className="text-success">Ghế 112, Ghế 134,</h6> */}
      </div>
      <hr />
      <button
        className={styles.setButtonTicket}
        type="button"
        onClick={() => {
          dispatch(BOOKING_DAT_VE);
        }}
      >
        ĐẶT VÉ
      </button>
    </>
  );
}

export default SeatBill;
