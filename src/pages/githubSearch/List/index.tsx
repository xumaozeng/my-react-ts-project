/**
 * List组件
 */
import React from "react";
import { dataProps } from "../types";
import "./index.scss";

type ListProps = dataProps;
const List: React.FC<ListProps> = props => {
  const { users, isFirst, loading, err } = props;

  return (
    <div className="row">
      {isFirst ? (
        <h3>初始化状态</h3>
      ) : loading ? (
        <p>正在加载中。。。</p>
      ) : err ? (
        <p>{err.message}</p>
      ) : (
        users?.map(user => (
          <div key={user.id} className="card">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img alt="react" src={user.avatar_url} style={{ width: 100 }} />
            </a>
            <p className="card-text">{user.login}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default List;
