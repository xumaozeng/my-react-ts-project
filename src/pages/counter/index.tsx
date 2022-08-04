/**
 * counter的容器组件：使用hooks
 */
import React, { useRef } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { ActionCounter, StateProps } from "@/store/types";
import { decrement, increment } from "./action";
import "./index.scss";

const Counter: React.FC = () => {
  const selectEle = useRef<HTMLSelectElement>(null);
  const { count, persons } = useSelector<StateProps, StateProps>(state => state);
  const dispatch = useDispatch<Dispatch<ActionCounter>>();

  function add() {
    const value = selectEle.current?.value;
    dispatch(increment(Number(value)));
  }

  function minus() {
    const value = selectEle.current?.value;
    dispatch(decrement(Number(value)));
  }

  return (
    <>
      <h2>我是Count组件，下方组件的总人数为：{persons.length}</h2>
      <h4>当前求和为：{count}</h4>
      <select className="form-control counter-select" ref={selectEle}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button className="btn" onClick={add}>
        +
      </button>
      &nbsp;
      <button className="btn" onClick={minus}>
        -
      </button>
    </>
  );
};
export default Counter;
