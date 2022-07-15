import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React from "react";
import { selectExample, changeState, resetState } from "./exampleSlice";
import "./index.scss";

interface ExampleProps {}
const Example: React.FC<ExampleProps> = () => {
  const text = useAppSelector(selectExample);
  const dispatch = useAppDispatch();

  const handleChange = (): void => {
    dispatch(changeState("正在更改状态"));
  };

  const handleReset = (): void => {
    dispatch(resetState());
  };

  return (
    <div className="example">
      <h3>{text}</h3>
      <button onClick={handleChange}>改变文字</button>
      <button onClick={handleReset}>重置文字</button>
    </div>
  );
};
export default Example;
