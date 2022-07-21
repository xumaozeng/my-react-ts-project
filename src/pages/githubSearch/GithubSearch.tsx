/**
 * github搜索组件
 */
import React, { useState } from "react";
import Search from "./Search";
import List from "./List";
import { dataProps } from "./types";

const initialArgs: dataProps = {
  users: [],
  isFirst: true,
  loading: false,
  err: undefined
};
const GithubSearch: React.FC = () => {
  const [data, setData] = useState<dataProps>(initialArgs);

  function search(dataObj: dataProps) {
    setData(prev => ({ ...prev, ...dataObj }));
  }

  return (
    <div className="container">
      <Search search={search} />
      <List {...data} />
    </div>
  );
};
export default GithubSearch;
