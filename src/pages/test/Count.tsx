import React, { useState } from "react";
import usePrevious from "@/hooks/usePrevious";

interface CountProps {}
const Count: React.FC<CountProps> = () => {
  const [count, updateCount] = useState<number>(0);
  const prevCount = usePrevious<number>(count);

  function add() {
    updateCount(count => count + 1);
  }

  console.log("count");

  return (
    <>
      <h2>
        当前值为：{count}，上一次的值为：{prevCount}
      </h2>
      <button onClick={add}>点我+1</button>
    </>
  );
};

export default Count;
