/**
 * github搜索组件
 */
import React, { useState } from "react";
import Search from "./Search";
import List from "./List";
import { userProps } from "./types";

const GithubSearch: React.FC = () => {
  const [users, setUsers] = useState<userProps[]>([]);

  function search(users: userProps[]) {
    setUsers(users);
  }

  return (
    <div className="container">
      <Search search={search} />
      <List users={users} />
    </div>
  );
};
export default GithubSearch;
