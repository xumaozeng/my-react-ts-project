/**
 * Person 人组件三个属性
 * name-姓名
 * sex-性别
 * age-年龄
 */
import { Component, ReactNode } from "react";

interface PersonObj {
  id: number;
  name: string;
  age: number;
}
interface PersonState {
  persons: PersonObj[];
}
class Person extends Component<{}, PersonState> {
  state: Readonly<PersonState> = {
    persons: [
      { id: 1, name: "小张", age: 18 },
      { id: 2, name: "小李", age: 19 },
    ],
  };

  add = () => {
    const { persons } = this.state;
    const p: PersonObj = { id: 3, name: "小王", age: 20 };
    this.setState({ persons: [p, ...persons] });
  };
  render(): ReactNode {
    const { persons } = this.state;

    return (
      <>
        <h2>展示人员信息</h2>
        <button onClick={this.add}>添加一个小王</button>
        <h3>使用index(索引值)作为key</h3>
        <ul>
          {persons.map((p, i) => (
            <li key={i}>
              {p.name}---{p.age}&nbsp;
              <input type="text" />
            </li>
          ))}
        </ul>
        <hr />
        <h3>使用id(唯一标识)作为key</h3>
        <ul>
          {persons.map(p => (
            <li key={p.id}>
              {p.name}---{p.age}&nbsp;
              <input type="text" />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Person;
