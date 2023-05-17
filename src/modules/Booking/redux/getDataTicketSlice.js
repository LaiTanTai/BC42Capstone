import { createSlice } from "@reduxjs/toolkit";
import { getDataTicket } from "../../../apis/bookingAPI";
const initialState = { dataTicket: null, isLoading: false, error: null };
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
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
export default bookingSlice.reducer;
