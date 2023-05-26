import React, { useRef, useState, useEffect } from "react";
import {
  apiListUser,
  apiAddUser,
  apiUpdateUser,
  apiDeleteUser,
  apiSearchUser,
} from "../../../apis/userAPI";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số"
    ),
  email: yup.string().required("Email không được để trống").email(),
  soDt: yup.number().required("Số điện thoại không được để trống"),
  maNhom: yup.string().required("Mã nhóm không được để trống"),
  hoTen: yup.string().required("Họ tên không được để trống"),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // declare initial value for inputs
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "onTouched",
    // Khai báo schema validation bằng yup
    resolver: yupResolver(schema),
  });

  const onSubmit = async (value) => {
    try {
      const data = await apiAddUser(value);
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getListUsers();
  };

  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const timeoutRef = useRef();

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (evt.target.value !== "") {
        const data = await apiSearchUser(evt.target.value);
        setListUser(data.content);
      } else {
        await getListUsers();
      }
    }, 1000);
  };

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const handleDelete = async (item) => {
    try {
      const data = await apiDeleteUser(item.taiKhoan);
    } catch (error) {
      console.log(error);
    }
    getListUsers();
  };

  const onUpdate = async (value) => {
    console.log(value);
    try {
      const data = await apiUpdateUser(value);
    } catch (error) {
      console.log(error);
    }
    getListUsers();
    setShowFix(false);
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
  }, []);

  return (
    <div className="user-background mt-5">
      <div>
        <h1 className="text-center text-light">Quản lý người dùng</h1>
      </div>
      <div>
        <ButtonCss info={"Thêm người dùng"} handleClick={handleShow} />

        <Modal className="Modal-background" show={show} onHide={handleClose}>
          <Modal.Header className="text-dark">
            <Modal.Title>Thêm người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">Tài Khoản</Form.Label>
                  <Form.Control
                    placeholder="Tài Khoản"
                    {...register("taiKhoan")}
                  />
                  {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="text-dark">Mật Khẩu</Form.Label>
                  <Form.Control
                    placeholder="Mật Khẩu"
                    type="password"
                    {...register("matKhau")}
                  />
                  {errors.matKhau && <p>{errors.matKhau.message}</p>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">Họ Tên</Form.Label>
                  <Form.Control placeholder="Họ Tên" {...register("hoTen")} />
                  {errors.hoTen && <p>{errors.hoTen.message}</p>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">Số Điện Thoại</Form.Label>
                  <Form.Control
                    placeholder="ví dụ: 08xxxxxxx"
                    {...register("soDt")}
                  />
                  {errors.soDt && <p>{errors.soDt.message}</p>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">
                    Mã Loại Người Dùng
                  </Form.Label>
                  <Form.Select {...register("maLoaiNguoiDung")}>
                    <option>Chọn Loại Người Dùng</option>
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">Mã Nhóm</Form.Label>
                  <Form.Control placeholder="Mã Nhóm" {...register("maNhom")} />
                  {errors.maNhom && <p>{errors.maNhom.message}</p>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-dark">Email</Form.Label>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
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
        <input
          ref={inputRef}
          placeholder="Tìm kiếm"
          className={style.timkiem}
          value={searchTerm}
          onChange={handleSearch}
        ></input>
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
                      <Modal.Header className="text-dark">
                        <Modal.Title>Sửa thông tin người dùng</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Tài Khoản
                              </Form.Label>
                              <Form.Control value={updateUser.taiKhoan} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label className="text-dark">
                                Mật Khẩu
                              </Form.Label>
                              <Form.Control
                                type="password"
                                placeholder={updateUser.matKhau}
                                {...register("matKhau")}
                              />
                              {errors.matKhau && (
                                <p>{errors.matKhau.message}</p>
                              )}
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Họ Tên
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.hoTen}
                                {...register("hoTen")}
                              />
                              {errors.hoTen && <p>{errors.hoTen.message}</p>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Số Điện Thoại
                              </Form.Label>
                              <Form.Control
                                placeholder={updateUser.soDT}
                                {...register("soDt")}
                              />
                              {errors.soDt && <p>{errors.soDt.message}</p>}
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Mã Loại Người Dùng
                              </Form.Label>
                              <Form.Select {...register("maLoaiNguoiDung")}>
                                <option>Chọn Loại Người Dùng</option>
                                <option value="KhachHang">Khách Hàng</option>
                                <option value="QuanTri">Quản Trị</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Mã Nhóm
                              </Form.Label>
                              <Form.Control
                                value="GP04"
                                {...register("maNhom")}
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label className="text-dark">
                                Email
                              </Form.Label>
                              <Form.Control
                                type="email"
                                placeholder={updateUser.email}
                                {...register("email")}
                              />
                              {errors.email && <p>{errors.email.message}</p>}
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
                    <ButtonCss
                      info={"Xóa"}
                      handleClick={() => handleDelete(item)}
                    />
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
