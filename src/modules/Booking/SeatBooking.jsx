import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SeatBooking.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCouch } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add(faCouch, faFontAwesome);

function SeatBooking() {
  const dispatch = useDispatch();
  
  return (
    <div className="container-fluid">
      <div className={styles.straightLine}></div>
      <div className={styles.trapezoid}></div>
      <div className="row mb-3">
        <span className="col "></span>
        <span className="col text-center">1</span>
        <span className="col text-center">2</span>
        <span className="col text-center">3</span>
        <span className="col text-center">4</span>
        <span className="col text-center">5</span>
        <span className="col text-center">6</span>
        <span className="col text-center">7</span>
        <span className="col text-center">8</span>
        <span className="col text-center">9</span>
        <span className="col text-center">10</span>
        <span className="col text-center">11</span>
        <span className="col text-center">12</span>
        <span className="col text-center">13</span>
        <span className="col text-center">14</span>
        <span className="col text-center">15</span>
        <span className="col text-center">16</span>
      </div>
    </div>
  );
}

export default SeatBooking;
