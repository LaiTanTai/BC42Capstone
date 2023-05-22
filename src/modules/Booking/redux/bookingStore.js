import { configureStore } from "@reduxjs/toolkit";
import getDataTicketReducer from "./getDataTicketSlice";
import infoPostTicketReducer from "./postDataTicketSlice";
const bookingStore = configureStore({
  reducer: {
    getDataTicketReducer,
    infoPostTicketReducer,
  },
});
export default bookingStore;
