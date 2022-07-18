/**
 * List组件
 */
import React from "react";
import "./index.scss";

interface ListProps {}
const List: React.FC<ListProps> = () => {
  return (
    <div className="row">
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
          <img alt="react" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: 100 }} />
        </a>
        <p className="card-text">reactjs</p>
      </div>
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
          <img alt="react" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: 100 }} />
        </a>
        <p className="card-text">reactjs</p>
      </div>
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
          <img alt="react" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: 100 }} />
        </a>
        <p className="card-text">reactjs</p>
      </div>
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
          <img alt="react" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: 100 }} />
        </a>
        <p className="card-text">reactjs</p>
      </div>
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
          <img alt="react" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: 100 }} />
        </a>
        <p className="card-text">reactjs</p>
      </div>
    </div>
  );
};
export default List;
