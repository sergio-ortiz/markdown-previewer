import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    default: state => {
      state; 
      return null;
    },
  },
})
