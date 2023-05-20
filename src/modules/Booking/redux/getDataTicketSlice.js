import { createSlice } from "@reduxjs/toolkit";
import { getDataTicket } from "../../../apis/bookingAPI";
const initialState = {
  dataTicket: null,
  isLoading: false,
  error: null,
  danhSachGheDaDat: [
    {
      maGhe: 57323,
      tenGhe: "03",
      maRap: 513,
      loaiGhe: "Thuong",
      stt: "03",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: null,
    },
  ],
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    BOOKING_DAT_VE: (state, action) => {
      let danhSachGheCapNhat = [...state.danhSachGheDaDat];
      let danhSachGheMoi = danhSachGheCapNhat.filter(
        (item) => item.maGhe !== action.payload.maGhe
      );
      console.log(danhSachGheMoi);

      return { ...state, danhSachGheDaDat: danhSachGheMoi };
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
