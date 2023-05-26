import React from "react";
import { Audio } from "react-loader-spinner";
import "./SpinnerLoading.scss";
export default function SpinnerLoading() {
  return (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
