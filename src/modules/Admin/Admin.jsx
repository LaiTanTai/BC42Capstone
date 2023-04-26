import React from "react";
import Film from "./FilmManagement/Film";
import Schedule from "./ScheduleManagement/Schedule";
import User from "./UserManagement/User";
import { Container, Row, Col } from "react-bootstrap";

function Admin() {
  return (
    <div>
      <Row>
        <Col
          sm={3}
          className="text-light px-5 py-5"
          style={{ backgroundColor: "#333a42" }}
        >
          <div>Quản Lý Người Dùng</div>
          <div>Quản Lý Phim</div>
          <div>Quản Lý Lịch Chiếu</div>
        </Col>
        <Col sm={9} style={{ backgroundColor: "#3b434e" }}>
          <User />
          <Film />
          <Schedule />
        </Col>
      </Row>
    </div>
  );
}

export default Admin;
