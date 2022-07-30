/**
 * 自定义的类似于this.forceUpdate的hook
 */

import { useCallback, useState } from "react";

function useForceUpdate() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCount] = useState<number>(0);

  const update = useCallback(() => {
    setCount(x => x + 1);
  }, []);

  return update;
}

export default useForceUpdate;
