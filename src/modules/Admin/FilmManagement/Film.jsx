// import React, { useRef, useState, useEffect } from "react";
// import {
//   getmovieAPI,
//   apiCreateMovie,
//   apiUpdateMovie,
//   apiDeleteFilm,
// } from "../../../apis/movieAPI";
// import { Container, Row, Col, Modal, Form, Pagination } from "react-bootstrap";
// import style from "./Film.module.scss";
// import ButtonCss from "./../../../components/Button/ButtonCss";
// import Table from "react-bootstrap/Table";
// import { useForm } from "react-hook-form";
// import { DatePicker, TimePicker } from "antd";
// import dayjs from "dayjs";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   tenPhim: yup.string().required("Tên phim không được để trống"),
//   trailer: yup.string().required("Trailer không được để trống"),
//   ngayKhoiChieu: yup.date(),
//   danhGia: yup.number().required("Đánh giá không được để trống"),
//   hinhAnh: yup.string().required("Hình ảnh không được để trống"),
//   moTa: yup.string().required("Mô tả không được để trống"),
// });

// function Film() {
//   const [listFilm, setListFilm] = useState([]);
//   const [updateFilm, setUpdatetFilm] = useState({});
//   const [show, setShow] = useState(false);
//   const [showFix, setShowFix] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleChooseFilm = (item) => {
//     setShowFix(true);
//     const clickedUser = listFilm.find((user) => user.maPhim === item.maPhim);
//     setUpdatetFilm(clickedUser);
//     console.log(clickedUser);
//   };

//   const [searchTerm, setSearchTerm] = useState("");
//   const inputRef = useRef();
//   const timeoutRef = useRef();

//   const handleSearch = (evt) => {
//     setSearchTerm(evt.target.value);
//     clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(async () => {
//       if (evt.target.value !== "") {
//         const data = listFilm.find((item) => item.tenPhim === evt.target.value);
//         console.log("data", data);
//         setListFilm([data]);
//       } else {
//         await getListFilms();
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     console.log(inputRef.current);
//     inputRef.current.focus();
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     // declare initial value for inputs
//     defaultValues: {
//       tenPhim: "",
//       trailer: "",
//       ngayKhoiChieu: "",
//       danhGia: "",
//       hinhAnh: "",
//       moTa: "",
//     },
//     mode: "onTouched",
//     // Khai báo schema validation bằng yup
//     resolver: yupResolver(schema),
//   });

//   const onSubmitFilm = async (values) => {
//     console.log("submit", values);
//     const ngayKhoiChieu = dayjs(values.ngayKhoiChieu).format("DD/MM/YYYY");
//     const payload = {
//       ...values,
//       hinhAnh: values.hinhAnh[0],
//       ngayKhoiChieu: ngayKhoiChieu,
//     };

//     console.log(payload);

//     try {
//       await apiCreateMovie(payload);
//     } catch (error) {
//       console.log(error);
//     }
//     getListFilms();
//     setShow(false);
//   };

//   const onUpdate = async (values) => {
//     console.log("submit", values);
//     const ngayKhoiChieu = dayjs(values.ngayKhoiChieu).format("DD/MM/YYYY");
//     const payload = {
//       ...values,
//       maPhim: updateFilm.maPhim,
//       hinhAnh: values.hinhAnh[0],
//       ngayKhoiChieu: ngayKhoiChieu,
//     };

//     console.log(payload);
//     try {
//       await apiUpdateMovie(payload);
//     } catch (error) {
//       console.log(error);
//     }
//     getListFilms();
//     setShowFix(false);
//   };

//   const getListFilms = async () => {
//     try {
//       const data = await getmovieAPI();
//       setListFilm(data.content);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (item) => {
//     try {
//       const data = await apiDeleteFilm(item.maPhim);
//     } catch (error) {
//       console.log(error);
//     }
//     getListFilms();
//   };

//   useEffect(() => {
//     getListFilms();
//   }, []);

//   return (
//     <div className="mt-5 user-background">
//       <div>
//         <h1 className="text-center text-light">Quản lý phim</h1>
//       </div>
//       <div>
//         <ButtonCss info={"Thêm phim"} handleClick={handleShow} />

//         <Modal className="Modal-background" show={show} onHide={handleClose}>
//           <Modal.Header className="text-dark">
//             <Modal.Title>Thêm phim</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label className="text-dark">Tên Phim</Form.Label>
//                   <Form.Control
//                     placeholder="Tên Phim"
//                     {...register("tenPhim")}
//                   />
//                   {errors.tenPhim && <p>{errors.tenPhim.message}</p>}
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridPassword">
//                   <Form.Label className="text-dark">Link Trailer</Form.Label>
//                   <Form.Control
//                     placeholder="Link Trailer"
//                     {...register("trailer")}
//                   />
//                   {errors.trailer && <p>{errors.trailer.message}</p>}
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label className="text-dark">Ngày Khởi Chiếu</Form.Label>
//                   <Form.Control
//                     type="date"
//                     placeholder="Ngày Khởi Chiếu"
//                     {...register("ngayKhoiChieu")}
//                   />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label className="text-dark">Đánh Giá</Form.Label>
//                   <Form.Control
//                     placeholder="Đánh Giá"
//                     {...register("danhGia")}
//                   />
//                   {errors.danhGia && <p>{errors.danhGia.message}</p>}
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label className="text-dark">Hình ảnh</Form.Label>
//                   <Form.Control
//                     placeholder="Hình ảnh"
//                     type="file"
//                     {...register("hinhAnh")}
//                   />
//                   {errors.hinhAnh && <p>{errors.hinhAnh.message}</p>}
//                 </Form.Group>
//               </Row>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label className="text-dark">Mô tả</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     aria-label="With textarea"
//                     placeholder="Mô tả"
//                     {...register("moTa")}
//                   />
//                   {errors.moTa && <p>{errors.moTa.message}</p>}
//                 </Form.Group>
//               </Row>
//             </Form>{" "}
//           </Modal.Body>
//           <Modal.Footer>
//             <ButtonCss info={"Đóng"} handleClick={handleClose} />
//             <ButtonCss
//               info={"Thêm Phim"}
//               handleClick={handleSubmit(onSubmitFilm)}
//             />
//           </Modal.Footer>
//         </Modal>
//       </div>
//       <div>
//         <input
//           ref={inputRef}
//           placeholder="Tìm kiếm"
//           className={style.timkiem}
//           value={searchTerm}
//           onChange={handleSearch}
//         ></input>
//       </div>
//       <div className="mt-4">
//         <Table striped bordered hover>
//           <thead>
//             <tr className="text-light text-center">
//               <th>Mã phim</th>
//               <th>Tên phim</th>
//               <th>Link trailer</th>
//               <th>Đánh giá</th>
//               <th>Hình ảnh</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {listFilm.map((item, index) => {
//               return (
//                 <tr className="text-light text-center">
//                   <td>{item.maPhim}</td>
//                   <td>{item.tenPhim}</td>
//                   <td>{item.trailer}</td>
//                   <td>{item.danhGia}</td>
//                   <td>
//                     <img style={{ height: "100px" }} src={item.hinhAnh} />
//                   </td>
//                   <td>
//                     <ButtonCss
//                       info={"Sửa"}
//                       handleClick={() => {
//                         handleChooseFilm(item);
//                       }}
//                     />
//                     <Modal
//                       className="Modal-background"
//                       show={showFix}
//                       onHide={() => setShowFix(false)}
//                     >
//                       <Modal.Header className="text-dark">
//                         <Modal.Title>Sửa thông tin phim</Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <Form>
//                           <Row className="mb-3">
//                             <Form.Group as={Col} controlId="formGridEmail">
//                               <Form.Label className="text-dark">
//                                 Tên Phim
//                               </Form.Label>
//                               <Form.Control
//                                 placeholder={updateFilm.tenPhim}
//                                 {...register("tenPhim")}
//                               />
//                               {errors.tenPhim && (
//                                 <p>{errors.tenPhim.message}</p>
//                               )}
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="formGridPassword">
//                               <Form.Label className="text-dark">
//                                 Link Trailer
//                               </Form.Label>
//                               <Form.Control
//                                 placeholder={updateFilm.trailer}
//                                 {...register("trailer")}
//                               />
//                               {errors.trailer && (
//                                 <p>{errors.trailer.message}</p>
//                               )}
//                             </Form.Group>
//                           </Row>

//                           <Row className="mb-3">
//                             <Form.Group as={Col} controlId="formGridEmail">
//                               <Form.Label className="text-dark">
//                                 Ngày Khởi Chiếu
//                               </Form.Label>
//                               <Form.Control
//                                 type="date"
//                                 placeholder={updateFilm.ngayKhoiChieu}
//                                 {...register("ngayKhoiChieu")}
//                               />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="formGridEmail">
//                               <Form.Label className="text-dark">
//                                 Đánh Giá
//                               </Form.Label>
//                               <Form.Control
//                                 placeholder={updateFilm.danhGia}
//                                 {...register("danhGia")}
//                               />
//                               {errors.danhGia && (
//                                 <p>{errors.danhGia.message}</p>
//                               )}
//                             </Form.Group>
//                           </Row>

//                           <Row className="mb-3">
//                             <Form.Group as={Col} controlId="formGridEmail">
//                               <Form.Label className="text-dark">
//                                 Hình ảnh
//                               </Form.Label>
//                               <Form.Control
//                                 placeholder={updateFilm.hinhAnh}
//                                 type="file"
//                                 {...register("hinhAnh")}
//                               />
//                               {errors.hinhAnh && (
//                                 <p>{errors.hinhAnh.message}</p>
//                               )}
//                             </Form.Group>
//                           </Row>

//                           <Row className="mb-3">
//                             <Form.Group as={Col} controlId="formGridEmail">
//                               <Form.Label className="text-dark">
//                                 Mô tả
//                               </Form.Label>
//                               <Form.Control
//                                 as="textarea"
//                                 aria-label="With textarea"
//                                 placeholder={updateFilm.moTa}
//                                 {...register("moTa")}
//                               />
//                               {errors.moTa && <p>{errors.moTa.message}</p>}
//                             </Form.Group>
//                           </Row>
//                         </Form>{" "}
//                       </Modal.Body>
//                       <Modal.Footer>
//                         <ButtonCss
//                           info={"Đóng"}
//                           handleClick={() => setShowFix(false)}
//                         />
//                         <ButtonCss
//                           info={"Cập nhật thông tin"}
//                           handleClick={handleSubmit(onUpdate)}
//                         />
//                       </Modal.Footer>
//                     </Modal>
//                   </td>
//                   <td>
//                     <ButtonCss
//                       info={"Xóa"}
//                       handleClick={() => handleDelete(item)}
//                     />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>

//       <Pagination>
//         <Pagination.Ellipsis />
//         <Pagination.Prev />
//         <Pagination.Item active>{1}</Pagination.Item>
//         <Pagination.Item>{2}</Pagination.Item>
//         <Pagination.Item>{3}</Pagination.Item>
//         <Pagination.Item>{4}</Pagination.Item>
//         <Pagination.Item>{5}</Pagination.Item>
//         <Pagination.Next />
//         <Pagination.Ellipsis />
//       </Pagination>
//     </div>
//   );
// }

// export default Film;
