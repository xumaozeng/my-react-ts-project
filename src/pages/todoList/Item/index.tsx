/**
 * Item组件
 */

import React, { useState } from "react";
import { todoState } from "../types";
import "./index.scss";

const Item: React.FC<todoState> = props => {
  const { name, done } = props;
  const [mouse, setMouse] = useState<boolean>(false);

  function handleMouse(mouse: boolean) {
    return () => {
      setMouse(mouse);
    };
  }

  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      onMouseEnter={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <label>
        <input type="checkbox" defaultChecked={done} />
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
