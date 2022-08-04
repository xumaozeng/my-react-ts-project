/**
 * counter的action
 */

import { INCREMENT, DECREMENT } from "@/store/contants";
import { ActionCounter } from "@/store/types";

export const increment = (payload: number): ActionCounter => ({ type: INCREMENT, payload });
export const decrement = (payload: number): ActionCounter => ({ type: DECREMENT, payload });
