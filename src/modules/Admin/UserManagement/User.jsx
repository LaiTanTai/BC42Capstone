import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./User.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";

function User() {
  return (
    <div className="user-background">
      <div>
        <h1 className="text-center text-light">Quản lý người dùng</h1>
      </div>
      <div>
        <ButtonCss info={"Thêm người dùng"} />
      </div>
      <div>
        <input placeholder="Tìm kiếm" className={timkiem}></input>
      </div>
    </div>
  );
}

export default User;
