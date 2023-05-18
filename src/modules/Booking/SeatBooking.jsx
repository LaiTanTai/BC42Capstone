import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBooking.module.scss";
import { getDataTicket } from "../../apis/bookingAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCouch, faFontAwesome);

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
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>error</h1>;
    if (dataTicket) {
      return (
        <div style={{ marginLeft: "73px" }}>
          {dataTicket.content.danhSachGhe.map((item) => (
            <div className={styles.maGhe} key={item.maGhe}>
              <button
                className={styles.tenGhe}
                type="button"
                icon={faCouch}
                key={item.tenGhe}
              >
                {item.tenGhe}
              </button>
            </div>
          ))}
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
