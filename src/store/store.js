import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import alertSlice from "./alert-slice";
import mailSlice from "./mail-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    mail: mailSlice.reducer,
  },
});

export default store;
