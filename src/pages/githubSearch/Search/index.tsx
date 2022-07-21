/**
 * Search组件
 */

/* import React, { useRef } from "react";
import axios from "axios";
import { dataProps, errProps } from "../types";

interface SearchProps {
  search: (dataObj: dataProps) => void;
}
const Search: React.FC<SearchProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { search } = props;

  function handleSearch() {
    const keyWords = inputRef.current?.value;
    search({ isFirst: false, loading: true });
    axios
      .get(`/api_search/search/users?q=${keyWords}`)
      .then(res => {
        const { items } = res.data;
        search({ users: items, loading: false });
      })
      .catch((err: errProps) => {
        console.log(err);
        search({ err, loading: false });
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
export default Search; */

// 发布组件-pubsub
import React, { useRef } from "react";
import axios from "axios";
import { errProps } from "../types";
import PubSub from "pubsub-js";

const Search: React.FC = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    const keyWords = inputRef.current?.value;
    PubSub.publish("xq", { isFirst: false, loading: true });
    axios
      .get(`/api_search/search/users?q=${keyWords}`)
      .then(res => {
        const { items } = res.data;
        PubSub.publish("xq", { users: items, loading: false });
      })
      .catch((err: errProps) => {
        console.log(err);
        PubSub.publish("xq", { err, loading: false });
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
