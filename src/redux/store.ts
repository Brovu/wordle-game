import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./BoardSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
