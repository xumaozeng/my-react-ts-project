/**
 * count的reducer
 */
import { INCREMENT, DECREMENT } from "./constant";
import { ActionProps } from "./types";

const initialState: number = 0;
export default function countReducer(state: number = initialState, action: ActionProps): number {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return state + data!;
    case DECREMENT:
      return state - data!;
    default:
      return state;
  }
}
