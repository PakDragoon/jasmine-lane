import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./custom";

export default configureStore({
  reducer: {
    customData: customReducer
  }
});
