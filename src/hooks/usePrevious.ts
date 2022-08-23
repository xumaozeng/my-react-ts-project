/**
 * 自定义Hooks-之usePrevious返回上一次的值
 */

import { useEffect, useRef } from "react";

function usePrevious<T>(value: T) {
  const prevRef = useRef<T>();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}

export default usePrevious;
