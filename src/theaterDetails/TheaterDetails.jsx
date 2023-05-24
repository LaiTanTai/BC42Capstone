import React from "react";
import TheaterInfo from "./TheaterInfo/TheaterInfo";
import { useParams } from "react-router-dom";

function TheaterDetails() {
  const { theaterID } = useParams();
  return (
    <div style={{ backgroundColor: "#0a2029", marginTop: "50px" }}>
      <TheaterInfo maPhim={theaterID} />
    </div>
  );
}
export default TheaterDetails;
