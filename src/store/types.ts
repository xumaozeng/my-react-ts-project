/**
 * 类型声明
 */

export interface ActionCounter {
  type: string;
  payload?: number;
}

export interface PersonProps {
  id?: string;
  name?: string;
  age?: number;
}

export interface ActionPerson {
  type: string;
  payload?: PersonProps;
}

export interface StateProps {
  count: number;
  persons: PersonProps[];
}
