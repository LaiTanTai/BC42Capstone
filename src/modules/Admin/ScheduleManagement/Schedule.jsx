import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import style from "./Schedule.module.scss";
import ButtonCss from "./../../../components/Button/ButtonCss";
import { get, useForm } from "react-hook-form";
import { DatePicker, TimePicker } from "antd";
import {
  apiCreateSchedule,
  getHethongRap,
  getCumRap,
} from "../../../apis/bookingAPI";
import dayjs from "dayjs";

function Schedule() {
  const [systemRap, setSystemRap] = useState([]);
  const [CumRap, setCumRap] = useState([]);
  const [AddressRap, setAddressRap] = useState([]);
  const [maRap, setmaRap] = useState([]);

  const { register, handleSubmit } = useForm({
    // declare initial value for inputs
    defaultValues: {
      maPhim: "",
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
  });

  const handleHethongrap = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (evt.target.value !== "Chọn Rạp") {
        const data = await getCumRap(evt.target.value);
        const newData = data.content;
        const newListCumRap = newData.map((item) => {
          return item.maCumRap;
        });
        setCumRap(newListCumRap);
        const newListAddressRap = newData.map((item) => {
          return item.diaChi;
        });
        setAddressRap(newListAddressRap);
      }
    }, 1000);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const timeoutRef = useRef();
  const timeRef = useRef();

  const LaydsRap = async () => {
    try {
      const data = await getHethongRap();
      const newData = data.content;
      const newListSystem = newData.map((item) => {
        return item.maHeThongRap;
      });
      setSystemRap(newListSystem);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSystemRap = async () => {
    await LaydsRap();
  };

  useEffect(() => {
    renderSystemRap();
  }, []);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const onSubmit = async (value) => {
    console.log("gi");
    const giaVe = parseInt(value.giaVe);
    const maPhim = parseInt(value.maPhim);
    const ngayChieuGioChieu = `${dayjs(value.ngayChieuGioChieu).format(
      "DD/MM/YYYY"
    )} 11:50:10`;

    const payload = {
      ...value,
      giaVe: giaVe,
      maPhim: maPhim,
      ngayChieuGioChieu: ngayChieuGioChieu,
    };
    try {
      const data = await apiCreateSchedule(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-center text-light">Quản Lý Lịch Chiếu</h1>
      </div>
      <div className={`mt-4 ${style.inputSchedule}`}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Mã Phim</Form.Label>
              <Form.Control placeholder="Mã Phim" {...register("maPhim")} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="text-light">Ngày Chiếu</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ngày Chiếu Phim"
                {...register("ngayChieuGioChieu")}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Mã Rạp</Form.Label>
              <Form.Control placeholder="Mã Rạp" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Giờ Chiếu</Form.Label>
              <TimePicker
                ref={timeRef}
                placeholder="select time"
                className="form-control"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Hệ Thống Rạp</Form.Label>
              <Form.Select ref={inputRef} onChange={handleHethongrap}>
                <option>Chọn Rạp</option>
                <option value={systemRap[0]}>{systemRap[0]}</option>
                <option value={systemRap[1]}>{systemRap[1]}</option>
                <option value={systemRap[2]}>{systemRap[2]}</option>
                <option value={systemRap[3]}>{systemRap[3]}</option>
                <option value={systemRap[4]}>{systemRap[4]}</option>
                <option value={systemRap[5]}>{systemRap[5]}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Cụm Rạp</Form.Label>
              <Form.Select {...register("maRap")}>
                <option>Chọn Cụm Rạp</option>
                <option value={CumRap[0]}>{CumRap[0]}</option>
                <option value={CumRap[1]}>{CumRap[1]}</option>
                <option value={CumRap[2]}>{CumRap[2]}</option>
                <option value={CumRap[3]}>{CumRap[3]}</option>
                <option value={CumRap[4]}>{CumRap[4]}</option>
                <option value={CumRap[5]}>{CumRap[5]}</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Địa Chỉ Rạp</Form.Label>
              <Form.Select>
                <option>Chọn Địa Chỉ Rạp</option>
                <option value={AddressRap[0]}>{AddressRap[0]}</option>
                <option value={AddressRap[1]}>{AddressRap[1]}</option>
                <option value={AddressRap[2]}>{AddressRap[2]}</option>
                <option value={AddressRap[3]}>{AddressRap[3]}</option>
                <option value={AddressRap[4]}>{AddressRap[4]}</option>
                <option value={AddressRap[5]}>{AddressRap[5]}</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-light">Giá Vé</Form.Label>
              <Form.Control placeholder="Giá Vé" {...register("giaVe")} />
            </Form.Group>
          </Row>

          <ButtonCss
            info={"Thêm lịch chiếu"}
            handleClick={handleSubmit(onSubmit)}
          />
        </Form>{" "}
      </div>
    </div>
  );
}

export default Schedule;
