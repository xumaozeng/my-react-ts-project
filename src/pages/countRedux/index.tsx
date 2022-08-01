/**
 * redux版本的计数器
 */

import React, { useEffect, useState } from "react";
import { Button, Space, Select } from "antd";
import store from "./redux/store";
import { countAsyncIncrementAction, countDecrementAction, countIncrementAction } from "./redux/count_action";
import useForceUpdate from "@/hooks/useForceUpdate";

const { Option } = Select;

const Count: React.FC = () => {
  const [value, updateValue] = useState<number>(1);
  const count = store.getState();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    // 监听状态，强制更新视图
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeValue(value: number) {
    updateValue(value);
  }

  function increment() {
    store.dispatch(countIncrementAction(value));
  }

  function decrement() {
    store.dispatch(countDecrementAction(value));
  }

  // 当前奇数才加
  function incrmentIfOdd() {
    if (count & 1) {
      store.dispatch(countIncrementAction(value));
    }
  }

  function incrementAsync() {
    store.dispatch(countAsyncIncrementAction(value, 1000));
  }

  return (
    <>
      <h3>当前计数为：{count}</h3>
      <Space size={10}>
        <Select value={value} onChange={changeValue}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
        </Select>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrmentIfOdd}>当前为奇数+</Button>
        <Button onClick={incrementAsync}>异步+</Button>
      </Space>
    </>
  );
};
export default Count;
