import { createSlice } from "@reduxjs/toolkit";
import { postDataTicket } from "../../../apis/bookingAPI";

const initialState = {
  maLichChieu: 0,
  danhSachVe: [],
  isLoading: false,
  error: null,
};

const infoPostTicketSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    BOOKING_POST_DATA: (state, action) => {
      const { movieID, maGhe, giaVe } = action.payload;
      let maLichChieu = movieID;
      
      console.log(movieID);
      return { ...state, maLichChieu, maGhe, giaVe };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postDataTicket.pending, (state) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(postDataTicket.fulfilled, (state) => {
      return { ...state, isLoading: false };
    });
    builder.addCase(postDataTicket.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});
export const { BOOKING_POST_DATA } = infoPostTicketSlice.actions;
export default infoPostTicketSlice.reducer;
