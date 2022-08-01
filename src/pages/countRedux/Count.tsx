/**
 * redux版本的计数器:UI组件-不写和store相关的东西
 */

import React, { useState } from "react";
import { Button, Space, Select } from "antd";
import { ActionProps } from "./redux/types";

const { Option } = Select;

interface CountProps {
  count: number;
  increment: (value: number) => ActionProps;
  decrement: (value: number) => ActionProps;
  incrementAsync: (value: number, delay: number) => void;
}
const Count: React.FC<CountProps> = props => {
  const { count, increment, decrement, incrementAsync } = props;
  const [value, updateValue] = useState<number>(1);

  function changeValue(value: number) {
    updateValue(value);
  }

  function add() {
    increment(value);
  }

  function minus() {
    decrement(value);
  }

  // 当前奇数才加
  function addIfOdd() {
    if (count & 1) {
      increment(value);
    }
  }

  // 异步加
  function addAsync() {
    incrementAsync(value, 1000);
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
        <Button onClick={add}>+</Button>
        <Button onClick={minus}>-</Button>
        <Button onClick={addIfOdd}>当前为奇数+</Button>
        <Button onClick={addAsync}>异步+</Button>
      </Space>
    </>
  );
};
export default Count;
