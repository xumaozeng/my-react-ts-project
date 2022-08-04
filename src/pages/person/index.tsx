/**
 * persons的容器组件
 */

import React, { useRef } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { uniqueId } from "lodash";
import { ActionPerson, PersonProps, StateProps } from "@/store/types";
import { addPerson } from "./action";
import "./index.scss";

const Person: React.FC = () => {
  const nameEle = useRef<HTMLInputElement>(null);
  const ageEle = useRef<HTMLInputElement>(null);
  const { count, persons } = useSelector<StateProps, StateProps>(state => state);
  const dispatch = useDispatch<Dispatch<ActionPerson>>();

  function add() {
    const name = nameEle.current?.value;
    const age = ageEle.current?.value;
    const personObj: PersonProps = {
      id: uniqueId(),
      name,
      age: Number(age)
    };
    dispatch(addPerson(personObj));
  }

  return (
    <>
      <hr />
      <h2>我是Person组件，上方组件求和为：{count}</h2>
      <input type="text" className="form-control person-input" ref={nameEle} placeholder="请输入姓名" />
      &nbsp;
      <input type="text" className="form-control person-input" ref={ageEle} placeholder="请输入年龄" />
      &nbsp;
      <button className="btn" onClick={add}>
        添加
      </button>
      <ul className="list-group">
        {persons.map(p => (
          <li key={p.id} className="list-group-item">
            姓名：{p.name} - 年龄：{p.age}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Person;
