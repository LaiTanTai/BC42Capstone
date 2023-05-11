import { createSlice } from "@reduxjs/toolkit";
import { getDataTicket } from "../../../apis/bookingAPI";
const initialState = { dataTicket: null };
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataTicket.fulfilled, (state, action) => {
      return { ...state, dataTicket: action.payload };
    });
  },
});
export default bookingSlice.reducer;
