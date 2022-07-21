/**
 * List组件
 */
/* import React from "react";
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
export default List; */

// 订阅组件-pubsub
import React, { useEffect, useState } from "react";
import { dataProps } from "../types";
import PubSub from "pubsub-js";
import "./index.scss";

const initialArgs: dataProps = {
  users: [],
  isFirst: true,
  loading: false,
  err: undefined
};
const List: React.FC = props => {
  const [data, setData] = useState<dataProps>(initialArgs);
  const { isFirst, loading, users, err } = data;

  function updateData(_: string, dataObj: dataProps) {
    setData(prev => ({ ...prev, ...dataObj }));
  }

  useEffect(() => {
    const token = PubSub.subscribe("xq", updateData);
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

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
