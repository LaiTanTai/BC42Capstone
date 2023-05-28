import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../ShowTime/ShowTime.scss";
import Description from "../Description/Description";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

function TabPanelNavigationCinema(tab) {
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

function TabPanelBarInfo(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanelNavigationCinema.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

TabPanelBarInfo.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yPropsBarInfo(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function a11yPropsNavigationCinema(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function ShowTime(props) {
  const [valueNavigationCinema, setValueNavigationCinema] = useState(0);
  const [valueBarInfo, setValueBarInfo] = useState(0);
  const changeNavigationCinema = (event, newValue) => {
    setValueNavigationCinema(newValue);
  };

  const changeNavigationBarInfo = (event, newValue) => {
    setValueBarInfo(newValue);
  };
  let { phim, maPhim } = props;

  var moment = require("moment");
  const renderRap = () => {
    return phim.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <Tab
          key={index}
          label={heThongRap.tenHeThongRap}
          {...a11yPropsNavigationCinema({ index })}
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
                  <div className="time__begin">
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
          <TabPanelNavigationCinema
            value={valueNavigationCinema}
            index={index}
            className="theater__content"
          >
            <ul className="list__theater">{renderShowTime(heThongRap)}</ul>
          </TabPanelNavigationCinema>
        </div>
      );
    });
  };

  return (
    <section className="tabBookMovie">
      <div className="container">
        <Box
          sx={{ bgcolor: "background.paper", width: 500 }}
          style={{ margin: "auto" }}
        >
          <AppBar position="static">
            <Tabs
              // className="nav nav-pills mb-3"
              // id="pills-tab"
              value={valueBarInfo}
              onChange={changeNavigationBarInfo}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                className="nav-item"
                {...a11yPropsBarInfo(0)}
                label="Lịch Chiếu"
              />

              <Tab
                className="nav-item"
                {...a11yPropsBarInfo(1)}
                label="Thông Tin"
              />
            </Tabs>
          </AppBar>
        </Box>
        {/* TAB LỊCH CHIẾU */}
        <div id="movieTheater" className="tab-content">
          <TabPanelBarInfo
            value={valueBarInfo}
            index={0}
            // className="tab-pane"
            // id="pills-schedule"
          >
            <Box className="movieTheater__row row bg-light">
              <div className="row__left col-md-4 col-sm-12">
                <Tabs
                  className="nav flex-column nav-pills"
                  id="v-pills-rap"
                  orientation="vertical"
                  variant="scrollable"
                  value={valueNavigationCinema}
                  onChange={changeNavigationCinema}
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
          </TabPanelBarInfo>
          {/**Thông tin */}
          <div>
            <TabPanelBarInfo
              value={valueBarInfo}
              index={1}
              // className="tab-pane"
              // id="pills-info"
            >
              <Description thongTin={phim} />
            </TabPanelBarInfo>
          </div>
        </div>
      </div>
    </section>
  );
}
