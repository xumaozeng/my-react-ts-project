/**
 * Item组件
 */

import React, { useState } from "react";
import { todoState } from "../types";
import "./index.scss";

interface ItemProp extends todoState {
  changeTodos: (id: string, done: boolean) => void;
  deleteTodos: (id: string) => void;
}
const Item: React.FC<ItemProp> = props => {
  const { id, name, done, changeTodos, deleteTodos } = props;
  const [mouse, setMouse] = useState<boolean>(false);

  function handleMouse(mouse: boolean) {
    return () => {
      setMouse(mouse);
    };
  }

  function handleCheck(id: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      changeTodos(id, event.target.checked);
    };
  }

  function handleDelete(id: string) {
    return () => {
      if (window.confirm("你确定删除吗？")) {
        deleteTodos(id);
      }
    };
  }

  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      onMouseEnter={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <label>
        <input type="checkbox" checked={done} onChange={handleCheck(id)} />
        <span>{name}</span>
      </label>
      <button
        className="btn btn-danger"
        style={{ display: mouse ? "inline-block" : "none" }}
        onClick={handleDelete(id)}
      >
        删除
      </button>
    </li>
  );
};
export default Item;
