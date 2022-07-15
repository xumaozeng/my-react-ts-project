import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExampleState = string;

const initialState: ExampleState = "初始状态";

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    changeState: (_, action: PayloadAction<string>) => action.payload,
    resetState: () => initialState,
  },
});

export const { changeState, resetState } = exampleSlice.actions;

export const selectExample = (state: RootState) => state.example;

export default exampleSlice.reducer;
