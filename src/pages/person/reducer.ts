/**
 * person的reducer
 */

import { ADD_PERSON } from "@/store/contants";
import { ActionPerson, PersonProps } from "@/store/types";

const initialPerson: PersonProps[] = [{ id: "01", name: "小徐", age: 27 }];
export default function personReducer(state: PersonProps[] = initialPerson, action: ActionPerson): PersonProps[] {
  const { type, payload = {} } = action;
  switch (type) {
    case ADD_PERSON:
      return [payload, ...state];
    default:
      return state;
  }
}
