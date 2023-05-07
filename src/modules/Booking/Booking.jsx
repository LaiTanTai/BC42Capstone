import React from "react";
import SeatBooking from "./SeatBooking";
import SeatBill from "./SeatBill";
import "./Booking.module.scss";

function Booking() {
  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-8">
    //       <div>
    //         <div className="flex flex-col align-items-center mt-3">
    //           <div className={style.straightLine}></div>
    //         </div>
    //         <div className={style.trapezoid}></div>
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <h1 className="text-secondary">Tên phim</h1>
    //       <p>Địa chỉ rạp phim ???</p>
    //       <p>01/10/2020 - 12:10 - rạp 6</p>

    //       <table className="table table-primary">
    //         <thead>
    //           <tr>
    //             <th scope="col">First</th>
    //             <th scope="col">Last</th>
    //             <th scope="col">Handle</th>
    //             <th scope="col">#</th>
    //           </tr>
    //         </thead>
    //         <tbody></tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-7">
          <SeatBooking />
        </div>
        <div className="col-5" style={{ marginTop: "128px" }}>
          <SeatBill />
        </div>
      </div>
    </div>
  );
}

export default Booking;
