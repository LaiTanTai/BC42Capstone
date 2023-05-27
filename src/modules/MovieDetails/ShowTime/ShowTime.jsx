import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../ShowTime/ShowTime.scss";
import Description from "../Description/Description";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import Comment from "../Comment/Comment";
function TabPanel(tab) {
  const { children, value, index, ...other } = tab;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function ShowTime(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let { phim, maPhim } = props;

  var moment = require("moment");
  const renderRap = () => {
    return phim.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <Tab
          key={index}
          label={heThongRap.tenHeThongRap}
          {...a11yProps({ index })}
          icon={<img src={heThongRap.logo} alt={index} />}
          // key={index}
          className="nav-link text-success"
          id="v-pills-cgv-tab"
          iconPosition="start"
        />
      );
    });
  };

  const renderTime = (cumRap) => {
    return (
      <div>
        <div className="film__version my-4">2D Digital</div>
        <ul className="d-flex flex-wrap">
          {cumRap.lichChieuPhim?.map((lichChieu, index) => {
            return (
              <div className="timeshow__item" key={index}>
                <NavLink
                  className="timeshow__link"
                  to={`/booking/${lichChieu.maLichChieu}`}
                >
                  <div className="time__begin mb-2">
                    {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/yyyy")}
                    <p>
                      {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </ul>
      </div>
    );
  };
  const renderShowTime = (heThongRap) => {
    return heThongRap.cumRapChieu?.map((cumRap, index) => {
      return (
        <li className="list__item" key={index}>
          <a
            className="theater__link"
            href={`#${cumRap.maCumRap}`}
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            // aria-controls="collapseExample"
          >
            <div className="row">
              <div className="theater__img col-2">
                <img src="https://i.ibb.co/cvb2Rk6/theater.jpg" alt="hinhrap" />
              </div>
              <div className="theater__title col-10">
                <span className="theater__name cgv-color">
                  <span className="theater__subname"> {cumRap.tenCumRap} </span>
                </span>
              </div>
            </div>
          </a>
          <div className="collapse" id={cumRap.maCumRap}>
            <div className="collapse__content">
              <div className="film__timeshow">{renderTime(cumRap)}</div>
            </div>
          </div>
        </li>
      );
    });
  };
  const renderCumRap = () => {
    return phim.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <div
          key={index}
          className="tab-pane fade show active"
          id={heThongRap.maHeThongRap}
          role="tabpanel"
        >
          <TabPanel value={value} index={index} className="theater__content">
            <ul className="list__theater">{renderShowTime(heThongRap)}</ul>
          </TabPanel>
        </div>
      );
    });
  };

  return (
    <section className="tabBookMovie">
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-schedule"
              role="tab"
              aria-controls="pills-schedule"
              aria-selected="true"
            >
              Lịch Chiếu
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-info"
              role="tab"
              aria-controls="pills-info"
              aria-selected="false"
            >
              Thông Tin
            </a>
          </li>
        </ul>
        {/* TAB LỊCH CHIẾU */}
        <div id="movieTheater" className="tab-content">
          <div className="tab-pane fade show active" id="pills-schedule">
            <Box className="movieTheater__row row bg-light">
              <div className="row__left col-md-4 col-sm-12">
                <Tabs
                  className="nav flex-column nav-pills"
                  id="v-pills-rap"
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                >
                  {renderRap()}
                </Tabs>
              </div>
              <div
                className="tab-content col-md-8 col-sm-12"
                id="v-pills-tabContent"
              >
                {renderCumRap()}
              </div>
            </Box>
          </div>
          {/**Thông tin */}
          <div>
            <div path="/thong-tin" className="tab-pane fade" id="pills-info">
              <Description thongTin={phim} />
            </div>
            {/**Bình luận */}
            {/* <div
            className="tab-pane fade"
            id="pills-comment"
            role="tabpanel"
            aria-labelledby="pills-comment-tab"
          >
            <Comment thongTin={phim} maPhim={maPhim} />
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
