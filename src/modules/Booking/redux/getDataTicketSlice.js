import { createSlice } from "@reduxjs/toolkit";
import { getDataTicket } from "../../../apis/bookingAPI";
const initialState = {
  dataTicket: null,
  isLoading: false,
  error: null,
  danhSachGheDangDat: [],
  payTicket: 0,
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    BOOKING_DAT_VE: (state, action) => {
      let pay = state.payTicket;
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (item) => item.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
        pay = pay - action.payload.giaVe;
      } else {
        danhSachGheCapNhat.push(action.payload);
        pay = pay + action.payload.giaVe;
      }
      return {
        ...state,
        danhSachGheDangDat: danhSachGheCapNhat,
        payTicket: pay,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataTicket.pending, (state) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(getDataTicket.fulfilled, (state, action) => {
      return { ...state, isLoading: false, dataTicket: action.payload };
    });
    builder.addCase(getDataTicket.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});
export const { BOOKING_DAT_VE } = bookingSlice.actions;
export default bookingSlice.reducer;
