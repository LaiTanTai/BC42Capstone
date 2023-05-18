import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import style from "./Schedule.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import { DatePicker, TimePicker } from "antd";

function Schedule() {
  return (
    <div className="mt-4">
      <div>
        <h1 className="text-center text-light">Quản Lý Lịch Chiếu</h1>
      </div>
      <div className={`mt-4 ${style.inputSchedule}`}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Tên Phim</Form.Label>
              <Form.Control placeholder="Tên Phim" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="text-light">Ngày Chiếu</Form.Label>
              <DatePicker placeholder="select date" className="form-control" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Tên Rạp</Form.Label>
              <Form.Control placeholder="Tên Rạp" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Giờ Chiếu</Form.Label>
              <TimePicker placeholder="select time" className="form-control" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Địa Chỉ Rạp</Form.Label>
              <Form.Control placeholder="Địa Chỉ Rạp" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Giá Vé</Form.Label>
              <Form.Control placeholder="Giá Vé" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Mã Rạp</Form.Label>
              <Form.Control placeholder="Mã Rạp" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
          </Row>

          <ButtonCss type="submit" info={"Thêm lịch chiếu"} />
        </Form>{" "}
      </div>
    </div>
  );
}

export default Schedule;