import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "customData",
  initialState: {
    array: [],
    boolean: true,
    string: ""
  },
  reducers: {
    addData: (state, action) => {
      state.array.push(action.payload)
    },
    removeData: (state, action) => {
      state.array = state.array.filter(data => data.id !== action.payload)
    }
  }
});

export const { addData, removeData } = counterSlice.actions;

export default counterSlice.reducer;
