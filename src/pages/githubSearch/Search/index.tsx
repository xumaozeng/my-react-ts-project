/**
 * Search组件
 */

import React from "react";

interface SearchProps {}
const Search: React.FC<SearchProps> = () => {
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <input type="text" placeholder="输入你要查询的名字" />
      &nbsp;
      <button>Search</button>
    </section>
  );
};
export default Search;
