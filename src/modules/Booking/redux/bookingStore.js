import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingReducer";
const bookingStore = configureStore({
  reducer: {
    seatBooking: bookingReducer,
  },
});
export default bookingStore;
