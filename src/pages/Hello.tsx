import React from "react";

interface HelloProps {}
const Hello: React.FC<HelloProps> = () => {
  console.log(this);

  return (
    <>
      <h2>测试函数组件中的this</h2>
    </>
  );
};
export default Hello;
