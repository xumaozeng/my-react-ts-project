/**
 * count的actionCreator
 */
import { ActionProps } from "./types";
import { INCREMENT, DECREMENT } from "./constant";

export const countIncrementAction = (data: number): ActionProps => ({ type: INCREMENT, data });
export const countDecrementAction = (data: number): ActionProps => ({ type: DECREMENT, data });
