/**
 * Search组件
 */

import React, { useRef } from "react";
import axios from "axios";

interface SearchProps {}
const Search: React.FC<SearchProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function search() {
    const keyWords = inputRef.current?.value;
    axios
      .get(`/api_search/search/users?q=${keyWords}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索github用户</h3>
      <input ref={inputRef} type="text" placeholder="输入你要查询的条件" />
      &nbsp;
      <button onClick={search}>搜索</button>
    </section>
  );
};
export default Search;
