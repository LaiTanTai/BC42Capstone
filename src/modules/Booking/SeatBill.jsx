import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataTicket, postDataTicket } from "../../apis/bookingAPI";
import { BOOKING_POST_DATA } from "../../slice/postDataTicketSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../modules/Booking/SeatBill.scss";
function SeatBill({ bookingID }) {
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success("đặt vé thành công!!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { dataTicket, isLoading, error, danhSachGheDangDat, payTicket } =
    useSelector((state) => state.getDataTicketReducer);

  const { maLichChieu, danhSachVe, isLoadingPost } = useSelector(
    (state) => state.infoPostTicketReducer
  );

  let listTicket = [];
  const getListTicket = () => {
    listTicket = danhSachGheDangDat.map((infoItem) => {
      return {
        maGhe: infoItem.maGhe,
        giaVe: infoItem.giaVe,
      };
    });

    return listTicket;
  };
  const infoTicket = dataTicket?.content?.thongTinPhim;
  useEffect(() => {
    dispatch(getDataTicket(bookingID));
  }, []);

  const RenderInfoTicket = () => {
    if (isLoading)
      return <h1 className="text-center text-success">Loading...</h1>;
    if (error) return <h1 className="text-center text-danger">error</h1>;
    if (dataTicket)
      return (
        <div className="seatBill__info">
          <div className="dataInfor">
            <h6>cụm rạp:</h6>
            <h6 className="text-success">{infoTicket.tenCumRap}</h6>
          </div>
          <hr />
          <div className="dataInfor">
            <h6>Địa chỉ:</h6>
            <h6 className="text-success">{infoTicket.diaChi}</h6>
          </div>
          <hr />
          <div className="dataInfor">
            <h6>Rạp:</h6>
            <h6 className="text-success">{infoTicket.tenRap}</h6>
          </div>
          <hr />
          <div className="dataInfor">
            <h6>Ngày giờ chiếu:</h6>
            <h6 className="text-success">
              {infoTicket.ngayChieu} - {infoTicket.gioChieu}
            </h6>
          </div>
          <hr />
          <div className="dataInfor">
            <h6>Tên Phim:</h6>
            <h6 className="text-success">{infoTicket.tenPhim}</h6>
          </div>
          <hr />
        </div>
      );
  };
  return (
    <>
      <div className="seatBill__pay">
        <h1 className="text-center text-success mt-3">{`${payTicket.toLocaleString()}đ `}</h1>
        <hr />
      </div>
      <RenderInfoTicket />
      <div className="seatBill__selectSeat">
        <h6 className="text-center">Chọn:</h6>
        <div className="seatBill__selectSeat__box">
          {danhSachGheDangDat.map((gheDD, index) => {
            return (
              <Fragment key={index}>
                <h5
                  key={index}
                  className="selectSeat__item text-success d-inline"
                >
                  {gheDD.stt},
                </h5>
              </Fragment>
            );
          })}
        </div>
      </div>
      <hr />

      <button
        className="setButtonTicket"
        type="button"
        onMouseEnter={() => {
          getListTicket();
          dispatch(BOOKING_POST_DATA({ bookingID, listTicket }));
        }}
        onMouseDown={() => {
          dispatch(postDataTicket({ maLichChieu, danhSachVe }));
          showToastMessage();
        }}
        onClick={() => {
          if (danhSachVe.length !== 0) {
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }
        }}
      >
        ĐẶT VÉ
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default SeatBill;
