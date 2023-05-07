import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./bookingReducer";
const movieStore = configureStore({
  reducer: {
    seatBooking: movieReducer,
  },
});
export default movieStore;
