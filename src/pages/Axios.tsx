/**
 * 使用axios请求接口、代理
 */

import React, { useState } from "react";
import axios from "axios";

interface studentProps {
  id: string;
  name: string;
  age: number;
}
interface carProps {
  id: string;
  name: string;
  price: number;
}

const Axios: React.FC = () => {
  const [students, setStudents] = useState<studentProps[]>([]);
  const [cars, setCars] = useState<carProps[]>([]);

  function getStudentData() {
    axios.get("http://localhost:3000/api_student/students").then(res => {
      const students = res.data;
      setStudents(students);
    });
  }

  function getCarData() {
    axios.get("http://localhost:3000/api_car/cars").then(res => {
      const cars = res.data;
      setCars(cars);
    });
  }

  return (
    <>
      <ol>
        {students.map(student => (
          <li key={student.id}>
            姓名：{student.name}，年龄：{student.age}
          </li>
        ))}
      </ol>
      <ol>
        {cars.map(car => (
          <li key={car.id}>
            名字：{car.name}，价格：{car.price}
          </li>
        ))}
      </ol>
      <button onClick={getStudentData}>点我得到学生数据</button>
      <button onClick={getCarData}>点我得到汽车数据</button>
    </>
  );
};
export default Axios;
