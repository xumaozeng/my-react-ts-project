/**
 * counter的reducer
 */

import { DECREMENT, INCREMENT } from "@/store/contants";
import { ActionCounter } from "@/store/types";

const initialCount: number = 0;
export default function counterReducer(state: number = initialCount, action: ActionCounter): number {
  const { type, payload = 0 } = action;
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}
