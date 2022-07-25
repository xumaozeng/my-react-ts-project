/**
 * 二级路由News组件
 */
import React from "react";

interface NewsProps {}
const News: React.FC<NewsProps> = props => {
  return (
    <ul>
      <li>news01</li>
      <li>news02</li>
      <li>news03</li>
    </ul>
  );
};
export default News;
