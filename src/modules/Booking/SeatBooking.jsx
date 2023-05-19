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
    if (isLoading)
      return <h1 className="text-center text-success">Loading...</h1>;
    if (error) return <h1 className="text-center text-danger">error</h1>;
    if (dataTicket) {
      return (
        <div style={{ marginLeft: "73px" }}>
          {dataTicket?.content?.danhSachGhe.map((item, index) => {
            let classGheVip = item.
            return (
              <div className={styles.maGhe} key={index}>
                {item.loaiGhe === "Vip" ? (
                  <button key={index} type="button" className={styles.gheVip}>
                    {item.tenGhe}
                  </button>
                ) : (
                  <button className={styles.ghe} type="button" key={index}>
                    {item.tenGhe}
                  </button>
                )}
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
