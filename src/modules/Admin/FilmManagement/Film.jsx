import React, { useState } from "react";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import style from "./Film.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import Table from "react-bootstrap/Table";
import { DatePicker, TimePicker } from "antd";

function Film() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-center text-light">Quản lý phim</h1>
      </div>
      <div>
        <ButtonCss info={"Thêm phim"} handleClick={handleShow} />

        <Modal className="Modal-background" show={show} onHide={handleClose}>
          <Modal.Header className="text-light">
            <Modal.Title>Thêm phim</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Tên Phim</Form.Label>
                  <Form.Control placeholder="Tên Phim" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="text-light">Link Trailer</Form.Label>
                  <Form.Control placeholder="Link Trailer" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">
                    Ngày Khởi Chiếu
                  </Form.Label>
                  <DatePicker
                    placeholder="select date"
                    className="form-control"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Đánh Giá</Form.Label>
                  <Form.Control placeholder="Đánh Giá" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Hình ảnh</Form.Label>
                  <Form.Control placeholder="Hình ảnh" type="text" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Mô tả</Form.Label>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Mô tả"
                  />
                </Form.Group>
              </Row>
            </Form>{" "}
          </Modal.Body>
          <Modal.Footer>
            <ButtonCss info={"Đóng"} handleClick={handleClose} />
            <ButtonCss info={"Thêm người dùng"} />
          </Modal.Footer>
        </Modal>
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