import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataTicket = createAsyncThunk(
  "booking/getData_ticket",
  async (bookingID) => {
    try {
      const response = await axiosClient.get(
        `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${bookingID}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const postDataTicket = createAsyncThunk(
  "booking/postData_ticket",
  async (state) => {
    try {
      const response = await axiosAdmin.post(`/QuanLyDatVe/DatVe`, state);
      console.log(state);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
