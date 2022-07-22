import React, { useState } from "react";

interface CountProps {}
const Count: React.FC<CountProps> = () => {
  const [count, updateCount] = useState<number>(0);

  function add() {
    // updateCount(count + 3);
    setInterval(() => {
      // console.log(count);
      updateCount(count => count + 3);
    }, 1000);
  }

  console.log("count");

  return (
    <>
      <h2>计数器为：{count}</h2>
      <br />
      <br />
      <button onClick={add}>点我+3</button>
    </>
  );
};

export default Count;
