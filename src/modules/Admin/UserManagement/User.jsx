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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className={style.modalContent}>
            <Modal.Title>Thêm người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.modalContent}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Tên Phim</Form.Label>
                  <Form.Control placeholder="Tên Phim" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="text-light">Ngày Chiếu</Form.Label>
                  <Form.Control placeholder="Tên Phim" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Tên Rạp</Form.Label>
                  <Form.Control placeholder="Tên Rạp" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Giờ Chiếu</Form.Label>
                  <Form.Control placeholder="Tên Rạp" />
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
            </Form>{" "}
          </Modal.Body>
          <Modal.Footer className={style.modalContent}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
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
