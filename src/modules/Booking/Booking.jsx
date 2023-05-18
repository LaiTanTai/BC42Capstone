import React from "react";
import SeatBooking from "./SeatBooking";
import SeatBill from "./SeatBill";
import "./Booking.module.scss";
import { useParams } from "react-router";

function Booking() {
  const { movieID } = useParams();
  return (
    <div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-8">
          <SeatBooking movieID={movieID} />
        </div>
        <div className="col-4" style={{ boxShadow: "0 0 5px grey" }}>
          <SeatBill movieID={movieID} />
        </div>
      </div>
    </div>
  );
}

export default Booking;
