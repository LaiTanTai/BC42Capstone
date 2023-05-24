import React from "react";
import SeatBooking from "./SeatBooking";
import SeatBill from "./SeatBill";
import "./Booking.module.scss";
import { useParams } from "react-router";

function Booking() {
  const { bookingID } = useParams();
  return (
    <div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-8 my-5 py-5">
          <SeatBooking bookingID={bookingID} />
        </div>
        <div
          className="col-4 py-5"
          style={{
            boxShadow: "0 0 5px grey",
            marginTop: "95px",
            marginBottom: "25px",
          }}
        >
          <SeatBill bookingID={bookingID} />
        </div>
      </div>
    </div>
  );
}

export default Booking;
