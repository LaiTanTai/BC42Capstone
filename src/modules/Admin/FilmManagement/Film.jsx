import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Film.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import Table from "react-bootstrap/Table";

function Film() {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-center text-light">Quản lý phim</h1>
      </div>
      <div>
        <ButtonCss info={"Thêm phim"} />
      </div>
      <div>
        <input placeholder="Tìm kiếm" className={style.timkiem}></input>
      </div>
      <div className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr className="text-light text-center">
              <th>STT</th>
              <th>Mã phim</th>
              <th>Tên phim</th>
              <th>Link trailer</th>
              <th>Ngày khởi chiếu</th>
              <th>Đánh giá</th>
              <th>Hình ảnh</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

export default Film;
