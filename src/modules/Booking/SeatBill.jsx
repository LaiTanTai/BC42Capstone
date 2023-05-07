import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBill.module.scss";

function SeatBill() {
  const dispatch = useDispatch();

  const { seatSelected } = useSelector((state) => state.seatBooking);

  const handleOrder = (seatOrder) => {
    dispatch({
      type: "DAT_GHE",
      seatOrder,
    });
    alert("Đặt vé thành công");
  };

  const hanldeDelete = (soGhe) => {
    dispatch({
      type: "HUY_GHE",
      soGhe,
    });
  };
  return (
    <table
      className="table table-secondary"
      style={{ fontSize: "17px", borderRadius: "20px" }}
    >
      <thead>
        <tr>
          <th>Số ghế</th>
          <th>Loại</th>
          <th>Giá</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {seatSelected.map((item) => {
          return (
            <tr key={item.soGhe}>
              <td>{item.soGhe}</td>
              <td>{item.loai}</td>
              <td>{item.gia.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger btn-order"
                  onClick={() => hanldeDelete(item.soGhe)}
                >
                  Hủy
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <b>Tổng tiền</b>
          </td>
          <td></td>
          <td>
            <b>
              {seatSelected
                .reduce((total, item) => {
                  return (total += item.gia);
                }, 0)
                .toLocaleString()}
            </b>
          </td>
          <td>
            <button
              className="btn btn-success btn-order"
              disabled={seatSelected.length <= 0}
              onClick={() => handleOrder(seatSelected)}
            >
              Thanh toán
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SeatBill;
