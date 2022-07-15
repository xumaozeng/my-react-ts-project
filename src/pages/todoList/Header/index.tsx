/**
 * Header组件
 */

import React from "react";
import { todoState } from "../types";
import _ from "lodash";
import "./index.scss";

interface HeaderProps {
  todos: todoState[];
  addTodos: (param: todoState) => void;
}
const Header: React.FC<HeaderProps> = props => {
  const { addTodos } = props;

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    const target = event.target as HTMLInputElement;
    if (key !== "Enter" || target.value.trim() === "") return;
    const todoObj: todoState = {
      id: _.uniqueId(),
      name: target.value,
      done: false,
    };
    target.value = "";
    addTodos(todoObj);
  }

  return (
    <div className="todo-header">
      <input
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
      />
    </div>
  );
};
export default Header;
