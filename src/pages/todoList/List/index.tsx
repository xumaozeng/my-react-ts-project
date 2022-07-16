/**
 * List组件
 */

import React from "react";
import Item from "../Item";
import { todoState } from "../types";
import "./index.scss";

interface ListProps {
  todos: todoState[];
  changeTodos: (id: string, done: boolean) => void;
}
const List: React.FC<ListProps> = props => {
  const { todos, changeTodos } = props;

  return (
    <ul className="todo-main">
      {todos.map(todo => (
        <Item key={todo.id} {...todo} changeTodos={changeTodos} />
      ))}
    </ul>
  );
};
export default List;
