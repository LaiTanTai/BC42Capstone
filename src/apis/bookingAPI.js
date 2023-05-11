import axiosClient from "./axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataTicket = createAsyncThunk(
  "booking/getData_ticket",
  async (movieID, { dispatch, getState }) => {
    try {
      const response = await axiosClient.get(
        `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${movieID}`,
        {
          params: {
            maNhom: "GP04",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
console.log(getDataTicket);
