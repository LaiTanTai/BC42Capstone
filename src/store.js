import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import getDataTicketReducer from "./slice/getDataTicketSlice";
import infoPostTicketReducer from "./slice/postDataTicketSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    getDataTicketReducer,
    infoPostTicketReducer,
  },
});

export default store;
