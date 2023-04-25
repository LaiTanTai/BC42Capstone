import React from "react";
import styles from "./ButtonCss.module.scss";
import { Button } from "react-bootstrap";

function ButtonCss({ info }) {
  return <Button className={styles["btn-custom"]}>{info}</Button>;
}

export default ButtonCss;
