import React from "react";
import styles from "./CardShowTime.module.scss";
function CardShowTime() {
  return (
    <div className="alert alert-info mt-4">
      <p className="text-success">BHD Star Cineplex - 3/2</p>
      <button className={styles.buttonShowTime}>
        <span className="text-success">25-05-2022</span>
        <span>~</span>
        <span className="text-danger" style={{ fontSize: "17px" }}>
          14:51
        </span>
      </button>
    </div>
  );
}

export default CardShowTime;
