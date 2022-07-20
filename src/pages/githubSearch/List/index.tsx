/**
 * List组件
 */
import React from "react";
import { userProps } from "../types";
import "./index.scss";

interface ListProps {
  users: userProps[];
}
const List: React.FC<ListProps> = props => {
  const { users } = props;

  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="card">
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <img alt="react" src={user.avatar_url} style={{ width: 100 }} />
          </a>
          <p className="card-text">{user.login}</p>
        </div>
      ))}
    </div>
  );
};
export default List;
