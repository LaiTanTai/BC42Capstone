import React, { useState, useEffect } from "react";
import { apiListUser, apiAddUser, apiUpdateUser } from "../../../apis/userAPI";
import { useForm } from "react-hook-form";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import style from "./User.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import Table from "react-bootstrap/Table";

function User() {
  const [listUser, setListUser] = useState([]);
  const [updateUser, setUpdatetUser] = useState({});
  const [show, setShow] = useState(false);
  const [showFix, setShowFix] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChooseUser = (item) => {
    setShowFix(true);
    const clickedUser = listUser.find(
      (user) => user.taiKhoan === item.taiKhoan
    );
    setUpdatetUser(clickedUser);
    console.log(clickedUser);
  };

  const { register, handleSubmit } = useForm({
    // declare initial value for inputs
    defaultValues: {
      taiKhoan: "",
      MatKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });

  const onSubmit = async (value) => {
    try {
      const data = await apiAddUser(value);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const onUpdate = async (value) => {
    console.log(value);
    try {
      const data = await apiUpdateUser(value);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const getListUsers = async () => {
    try {
      const data = await apiListUser();
      setListUser(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListUsers();
  }, [listUser]);

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
                  <Form.Control
                    placeholder="Tài Khoản"
                    {...register("taiKhoan")}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="text-light">Mật Khẩu</Form.Label>
                  <Form.Control
                    placeholder="Mật Khẩu"
                    type="password"
                    {...register("MatKhau")}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Họ Tên</Form.Label>
                  <Form.Control placeholder="Họ Tên" {...register("hoTen")} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Số Điện Thoại</Form.Label>
                  <Form.Control
                    placeholder="ví dụ: 08xxxxxxx"
                    {...register("soDt")}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">
                    Mã Loại Người Dùng
                  </Form.Label>
                  <Form.Control
                    placeholder="Mã Loại Người Dùng"
                    {...register("maLoaiNguoiDung")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Mã Nhóm</Form.Label>
                  <Form.Control placeholder="Mã Nhóm" {...register("maNhom")} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Email</Form.Label>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
              </Row>
            </Form>{" "}
          </Modal.Body>
          <Modal.Footer>
            <ButtonCss info={"Đóng"} handleClick={handleClose} />
            <ButtonCss
              info={"Thêm người dùng"}
              handleClick={handleSubmit(onSubmit)}
            />
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <input placeholder="Tìm kiếm" className={style.timkiem}></input>
      </div>
      <div className="mt-4">
        <Table bordered hover>
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
          <tbody>
            {listUser.map((item, index) => {
              return (
                <tr className="text-light text-center">
                  <td>{index + 1}</td>
                  <td>{item.taiKhoan}</td>
                  <td>{item.matKhau}</td>
                  <td>{item.hoTen}</td>
                  <td>{item.soDT}</td>
                  <td>{item.maLoaiNguoiDung}</td>
                  <td>{item.email}</td>
                  <td>
                    <ButtonCss
                      info={"Sửa"}
                      handleClick={() => {
                        handleChooseUser(item);
                      }}
                    />
                    <Modal
                      className="Modal-background"
                      show={showFix}
                      onHide={() => setShowFix(false)}
                    >
                      <Modal.Header className="text-light">
                        <Modal.Title>Sửa thông tin người dùng</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Tài Khoản
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.taiKhoan}
                                {...register("taiKhoan")}
                              />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label className="text-light">
                                Mật Khẩu
                              </Form.Label>
                              <Form.Control
                                type="password"
                                placeholder={updateUser.matKhau}
                                {...register("MatKhau")}
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Họ Tên
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.hoTen}
                                {...register("hoTen")}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Số Điện Thoại
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.soDt}
                                {...register("soDt")}
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Mã Loại Người Dùng
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.maLoaiNguoiDung}
                                {...register("maLoaiNguoiDung")}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Mã Nhóm
                              </Form.Label>
                              <Form.Control value="GP04" />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-light">
                                Email
                              </Form.Label>
                              <Form.Control
                                type="email"
                                placeholder={updateUser.email}
                                {...register("email")}
                              />
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              controlId="formGridEmail"
                            ></Form.Group>
                          </Row>
                        </Form>{" "}
                      </Modal.Body>
                      <Modal.Footer>
                        <ButtonCss
                          info={"Đóng"}
                          handleClick={() => setShowFix(false)}
                        />
                        <ButtonCss
                          info={"Cập nhật thông tin"}
                          handleClick={handleSubmit(onUpdate)}
                        />
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>
                    <ButtonCss info={"Xóa"} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Pagination>
        <Pagination.Ellipsis />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Ellipsis />
      </Pagination>
    </div>
  );
}

export default User;
