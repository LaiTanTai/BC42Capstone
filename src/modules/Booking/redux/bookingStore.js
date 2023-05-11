import { configureStore } from "@reduxjs/toolkit";
import getDataTicketReducer from "./getDataTicketSlice";
const bookingStore = configureStore({
  reducer: {
    getDataTicketReducer,
  },
});
export default bookingStore;
