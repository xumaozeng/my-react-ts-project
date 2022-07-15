/**
 * Footer组件
 */

import React from "react";
import "./index.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>已完成0</span> / 全部2
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
  );
};
export default Footer;
