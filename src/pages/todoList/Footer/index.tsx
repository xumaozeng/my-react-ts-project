/**
 * Footer组件
 */

import React from "react";
import { todoState } from "../types";
import "./index.scss";

interface FooterProps {
  todos: todoState[];
  checkAll: (param: boolean) => void;
  clearAllDone: () => void;
}
const Footer: React.FC<FooterProps> = props => {
  const { todos, checkAll, clearAllDone } = props;
  const doneCount: number = todos.reduce(
    (pre, todo) => pre + (todo.done ? 1 : 0),
    0
  );
  const total: number = todos.length;

  function handleCheckAll(event: React.ChangeEvent<HTMLInputElement>) {
    checkAll(event.target.checked);
  }

  function handleClearAllDone() {
    clearAllDone();
  }

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={doneCount === total && total !== 0 ? true : false}
          onChange={handleCheckAll}
        />
      </label>
      <span>已完成{doneCount}</span> / 全部{total}
      <button className="btn btn-danger" onClick={handleClearAllDone}>
        清除已完成任务
      </button>
    </div>
  );
};
export default Footer;
