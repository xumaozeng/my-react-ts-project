/**
 * 使用context上下文
 */

import React, { useContext, ReactNode } from "react";
import { MyContext } from "./context";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./index.scss";

// parent
const Person: React.FC = () => {
  return (
    <div className="parent">
      <h2>我是父组件</h2>
      <MyContext.Provider value="小徐">
        {/* <Son /> */}
        <ErrorBoundary>
          <Son render={age => <Grand age={age} />} />
        </ErrorBoundary>
      </MyContext.Provider>
    </div>
  );
};

// son
interface SonProps {
  render: (age: number) => ReactNode;
}
const Son: React.FC<SonProps> = props => {
  return (
    <div className="son">
      <h2>我是儿子组件</h2>
      {props.render(27)}
    </div>
  );
};

// grand
interface GrandProps {
  age: number;
}
const Grand: React.FC<GrandProps> = props => {
  const username = useContext(MyContext);
  return (
    <div className="grand">
      <h2>我是孙子组件</h2>
      <h4>
        我从爷爷组件中拿到的数据是：{username}，年龄：{props.age}
      </h4>
    </div>
  );
};

export default Person;
