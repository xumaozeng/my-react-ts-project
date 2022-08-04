import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/pages/counter/reducer";
import personReducer from "@/pages/person/reducer";

const store = configureStore({
  reducer: {
    count: counterReducer,
    persons: personReducer
  }
});

export default store;
