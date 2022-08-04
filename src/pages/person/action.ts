/**
 * person的action
 */

import { ADD_PERSON } from "@/store/contants";
import { ActionPerson, PersonProps } from "@/store/types";

export const addPerson = (payload: PersonProps): ActionPerson => ({ type: ADD_PERSON, payload });
