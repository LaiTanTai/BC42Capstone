import axiosClient from "./axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataTicket = createAsyncThunk(
  "booking/getDataTicket",
  async (movieID) => {
    const { data } = await axiosClient.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${movieID}`,
      {
        params: {
          maNhom: "GP04 ",
        },
      }
    );
    return data;
  }
);
