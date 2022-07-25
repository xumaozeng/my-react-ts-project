/**
 * 详情三级路由组件
 */

import React from "react";
import { useParams } from "react-router-dom";
import { detailProp, messageProps } from "../types";

const detailData: detailProp[] = [
  { id: "01", content: "你好，中国" },
  { id: "02", content: "你好，现在" },
  { id: "03", content: "你好，未来" }
];
const Detail: React.FC = () => {
  const { id, title } = useParams<messageProps>();
  const findResult = detailData.find(item => item.id === id);

  return (
    <ul>
      <li>ID:{id}</li>
      <li>TITLE:{title}</li>
      <li>CONTENT:{findResult?.content}</li>
    </ul>
  );
};
export default Detail;
