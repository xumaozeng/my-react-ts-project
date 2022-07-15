/**
 * List组件
 */

import React from "react";
import Item from "../Item";
import { todoState } from "../types";
import "./index.scss";

interface ListProps {
  todos: todoState[];
}
const List: React.FC<ListProps> = props => {
  const { todos } = props;

  return (
    <ul className="todo-main">
      {todos.map(todo => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
export default List;
