import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./Theaterinfo.module.scss";
import { auto } from "@popperjs/core";

function TheaterInfo({ maPhim }) {
  return (
    <div>
      <div className={`${styles.theaterFrame} container`}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-8">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=2EnP2tVC00Q"}
              controls={false}
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-4" style={{ margin: "auto" }}>
            <p className="text-light">28.05.2022</p>
            <h3 className="text-light">Nhà Bà Nữ</h3>
            <p className="text-light">120phút</p>
            <button className={styles.theaterButton}>Mua vé</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterInfo;
