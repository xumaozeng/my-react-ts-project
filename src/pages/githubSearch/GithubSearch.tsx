/**
 * github搜索组件
 */
import React from "react";
import Search from "./Search";
import List from "./List";

interface GithubSearchProps {}
const GithubSearch: React.FC<GithubSearchProps> = () => {
  return (
    <div className="container">
      <Search />
      <List />
    </div>
  );
};
export default GithubSearch;
