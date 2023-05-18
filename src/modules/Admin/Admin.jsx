import React, { useState } from "react";
import Film from "./FilmManagement/Film";
import Schedule from "./ScheduleManagement/Schedule";
import User from "./UserManagement/User";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFilm,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function Admin() {
  const [active, setActive] = useState("user");
  const handleActive = (people) => {
    setActive(people);
  };
  return (
    <div>
      <Row>
        <Col
          sm={3}
          className="text-light px-5 py-5"
          style={{ backgroundColor: "#333a42", minHeight: "100vh" }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleActive("user");
            }}
          >
            <span>
              <FontAwesomeIcon className="px-2" icon={faUser} />
              Quản Lý Người Dùng
            </span>
          </div>
          <div
            className="mt-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleActive("film");
            }}
          >
            <span>
              <FontAwesomeIcon className="px-2" icon={faFilm} />
              Quản Lý Phim
            </span>
          </div>
          <div
            className="mt-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleActive("schedule");
            }}
          >
            <span>
              <FontAwesomeIcon className="px-2" icon={faCalendarDays} />
              Quản Lý Lịch Chiếu
            </span>
          </div>
        </Col>
        <Col sm={9} style={{ backgroundColor: "#3b434e", minHeight: "100vh" }}>
          {active === "user" ? (
            <User />
          ) : active === "film" ? (
            <Film />
          ) : active === "schedule" ? (
            <Schedule />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Admin;