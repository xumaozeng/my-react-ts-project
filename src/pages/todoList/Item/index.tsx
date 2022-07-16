/**
 * Item组件
 */

import React, { useState } from "react";
import { todoState } from "../types";
import "./index.scss";

interface ItemProp extends todoState {
  changeTodos: (id: string, done: boolean) => void;
}
const Item: React.FC<ItemProp> = props => {
  const { id, name, done, changeTodos } = props;
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

  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      onMouseEnter={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <label>
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={handleCheck(id)}
        />
        <span>{name}</span>
      </label>
      <button
        className="btn btn-danger"
        style={{ display: mouse ? "inline-block" : "none" }}
      >
        删除
      </button>
    </li>
  );
};
export default Item;
