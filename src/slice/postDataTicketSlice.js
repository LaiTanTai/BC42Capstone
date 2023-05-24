import { createSlice } from "@reduxjs/toolkit";
import { postDataTicket } from "../apis/bookingAPI";

const initialState = {
  maLichChieu: 0,
  danhSachVe: [],
  isLoadingPost: false,
  errorPost: null,
};

const infoPostTicketSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    BOOKING_POST_DATA: (state, action) => {
      const { bookingID, listTicket } = action.payload;
      let maLichChieu = bookingID;
      console.log(listTicket);
      console.log(bookingID);
      return { ...state, maLichChieu: maLichChieu, danhSachVe: listTicket };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postDataTicket.pending, (state) => {
      return { ...state, isLoadingPost: true, isLoadingPost: null };
    });
    builder.addCase(postDataTicket.fulfilled, (state, action) => {
      console.log(initialState);
      return { ...state, isLoadingPost: false };
    });
    builder.addCase(postDataTicket.rejected, (state, action) => {
      return {
        ...state,
        isLoadingPost: false,
        isLoadingPost: action.error.message,
      };
    });
  },
});
export const { BOOKING_POST_DATA } = infoPostTicketSlice.actions;
export default infoPostTicketSlice.reducer;
