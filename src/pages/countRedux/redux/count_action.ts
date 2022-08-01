/**
 * count的actionCreator
 */
import { ActionProps } from "./types";
import { INCREMENT, DECREMENT } from "./constant";
import { Dispatch } from "@reduxjs/toolkit";

export const countIncrementAction = (data: number): ActionProps => ({ type: INCREMENT, data });
export const countDecrementAction = (data: number): ActionProps => ({ type: DECREMENT, data });

// 异步action
export const countAsyncIncrementAction =
  (data: number, delay: number): any =>
  (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(countIncrementAction(data));
    }, delay);
  };
