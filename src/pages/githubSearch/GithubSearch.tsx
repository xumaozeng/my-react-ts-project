/**
 * github搜索组件
 */
import React from "react";
import "./index.scss";

interface GithubSearchProps {}
const GithubSearch: React.FC<GithubSearchProps> = props => {
  return (
    <div className="container">
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <input type="text" placeholder="输入你要查询的名字" />
        &nbsp;
        <button>Search</button>
      </section>
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
    </div>
  );
};
export default GithubSearch;
