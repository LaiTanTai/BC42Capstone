import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import style from "./User.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import Table from "react-bootstrap/Table";

function User() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="user-background mt-5">
      <div>
        <h1 className="text-center text-light">Quản lý người dùng</h1>
      </div>
      <div>
        <ButtonCss info={"Thêm người dùng"} handleClick={handleShow} />

        <Modal className="Modal-background" show={show} onHide={handleClose}>
          <Modal.Header className="text-light">
            <Modal.Title>Thêm người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Tài Khoản</Form.Label>
                  <Form.Control placeholder="Tài Khoản" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="text-light">Mật Khẩu</Form.Label>
                  <Form.Control placeholder="Mật Khẩu" type="password" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Họ Tên</Form.Label>
                  <Form.Control placeholder="Họ Tên" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Số Điện Thoại</Form.Label>
                  <Form.Control placeholder="ví dụ: 08xxxxxxx" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">
                    Mã Loại Người Dùng
                  </Form.Label>
                  <Form.Control placeholder="Mã Loại Người Dùng" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Mã Nhóm</Form.Label>
                  <Form.Control placeholder="Mã Nhóm" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Email</Form.Label>
                  <Form.Control placeholder="Email" type="email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
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
              <th>Tài khoản</th>
              <th>Mật khẩu</th>
              <th>Họ tên</th>
              <th>SĐT</th>
              <th>Loại người dùng</th>
              <th>Email</th>
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

export default User;
