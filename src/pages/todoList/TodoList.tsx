/**
 * todos待办事项
 * 分为Header、List、Item和Footer四个部分
 */

import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import { todoState } from "./types";
import "./index.scss";

interface TodoListProps {}
const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<todoState[]>([
    { id: "001", name: "吃饭", done: true },
    { id: "002", name: "睡觉", done: true },
    { id: "003", name: "打豆豆", done: false }
  ]);

  function addTodos(todoObj: todoState) {
    const newTodos = [todoObj, ...todos];
    setTodos(newTodos);
  }

  function changeTodos(id: string, done: boolean) {
    const newTodos: todoState[] = todos.map(todo => {
      if (todo.id === id) return { ...todo, done };
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <h3>TodoList待办事项</h3>
      <hr />
      <div className="todo-container">
        <Header todos={todos} addTodos={addTodos} />
        <List todos={todos} changeTodos={changeTodos} />
        <Footer />
      </div>
    </>
  );
};
export default TodoList;
