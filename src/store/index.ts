import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../pages/counter/counterSlice";
import exampleReducer from "../pages/example/exampleSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    example: exampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
