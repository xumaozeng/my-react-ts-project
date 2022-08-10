/**
 * 使用context上下文
 */
import React, { useContext } from "react";
import { MyContext } from "./context";
import "./index.scss";

// parent
const Person: React.FC = () => {
  return (
    <div className="parent">
      <h2>我是父组件</h2>
      <MyContext.Provider value="小徐">
        <Son />
      </MyContext.Provider>
    </div>
  );
};

// son
const Son: React.FC = () => {
  return (
    <div className="son">
      <h2>我是儿子组件</h2>
      <Grand />
    </div>
  );
};

// grand
const Grand: React.FC = () => {
  const username = useContext(MyContext);
  return (
    <div className="grand">
      <h2>我是孙子组件</h2>
      <h4>我从爷爷组件中拿到的数据是：{username}</h4>
    </div>
  );
};

export default Person;
