import axios from "axios";
import axiosClient from "./axiosClient";

export const getmovieAPI = async () => {
  const { data } = await axiosClient.get(
    "`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${12397}`"
  );
  return data;
};
