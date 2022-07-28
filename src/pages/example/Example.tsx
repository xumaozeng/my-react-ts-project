import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import { selectExample, changeState, resetState } from "./exampleSlice";
import { Button } from "antd";
import "./index.scss";

interface ExampleProps {}
const Example: React.FC<ExampleProps> = () => {
  const text = useAppSelector(selectExample);
  const dispatch = useAppDispatch();

  const handleChange = (): void => {
    dispatch(changeState("正在更改状态，请稍候！"));
  };

  const handleReset = (): void => {
    dispatch(resetState());
  };

  return (
    <div className="example">
      <h3>{text}</h3>
      <Button onClick={handleChange}>改变文字</Button>
      <Button type="primary" onClick={handleReset}>
        重置文字
      </Button>
    </div>
  );
};
export default Example;
