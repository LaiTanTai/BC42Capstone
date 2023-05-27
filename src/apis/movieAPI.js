import axios from "axios";
import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";

export const getmovieAPI = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP04",
    },
  });
  return data;
};
export const getBannerapi = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner");
  return data;
};
export const getMovieDetail = async (movieID) => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayThongTinPhim", {
    params: {
      MaPhim: movieID,
    },
  });
  return data;
};

export const apiSearchFilm = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP04",
    },
  });
  return data;
};

export const layThongTinPhimAPI = async (maPhim) => {
  const { data } = await axiosClient.get(
    `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    {
      params: {
        maPhim: maPhim,
      },
    }
  );
  return data;
};
export const layHeThongRapAPI = async () => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  return data;
};
export const layCumRapTheoHeThongAPI = async () => {
  const { data } = await axiosClient.get(
    `"/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04"`
  );
  return data;
};
export const layThongTinCumRapTheoHeThongAPI = async (maHeThongRap) => {
  const { data } = await axiosClient.get(
    `"/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}"`
  );
  return data;
};

export const apiUpdateUser = async (values) => {
  const payload = { ...values, maNhom: "GP04" };
  const { data } = await axiosAdmin.post(
    "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    payload
  );
  return data;
};
