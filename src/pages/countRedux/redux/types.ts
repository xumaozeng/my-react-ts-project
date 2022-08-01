export interface ActionProps {
  type: string;
  data?: number;
}

export interface StateProps {
  count: number;
}

export interface DispatchProps {
  increment: (value: number) => ActionProps;
  decrement: (value: number) => ActionProps;
  incrementAsync: (value: number, delay: number) => void;
}
