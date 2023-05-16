import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    value: ""
  },
  reducers: {
    userInput: (state, action) => {
      state.value = action.payload
    },
  }
});

export const { userInput } = editorSlice.actions;
export default editorSlice.reducer;
