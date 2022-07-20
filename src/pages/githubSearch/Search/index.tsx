/**
 * Search组件
 */

import React, { useRef } from "react";
import axios from "axios";
import { userProps } from "../types";

interface SearchProps {
  search: (users: userProps[]) => void;
}
const Search: React.FC<SearchProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { search } = props;

  function handleSearch() {
    const keyWords = inputRef.current?.value;
    axios
      .get(`/api_search/search/users?q=${keyWords}`)
      .then(res => {
        const { items } = res.data;
        search(items);
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
      <button onClick={handleSearch}>搜索</button>
    </section>
  );
};
export default Search;
