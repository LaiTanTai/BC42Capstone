import axiosClient from "./axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataTicket = createAsyncThunk(
  "booking/getData_ticket",
  async (movieID, { dispatch, getState }) => {
    try {
      const response = await axiosClient.get(
        `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${movieID}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const postDataTicket = createAsyncThunk(
  "booking/postData_ticket",
  async ({ dispatch, getState }) => {
    try {
      const state = getState();
      console.log(state);
      const response = await axiosClient.post(`/QuanLyDatVe/DatVe`, state);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
