/**
 * 二级路由message组件
 */
import React from "react";
import { Link, Route } from "react-router-dom";
import { messageProps } from "../types";
import Detail from "./Detail";

const messageData: messageProps[] = [
  { id: "01", title: "message01" },
  { id: "02", title: "message02" },
  { id: "03", title: "message03" }
];
const Message: React.FC = props => {
  return (
    <>
      <ul>
        {messageData.map(message => (
          <li key={message.id}>
            {/* params方式传参 */}
            {/* <Link to={`/home/message/${message.id}/${message.title}`}>{message.title}</Link> */}
            {/* search方式传参 */}
            {/* <Link to={`/home/message?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
            {/* state方式传参 */}
            <Link to={{ pathname: "/home/message", state: { id: message.id, title: message.title } }}>
              {message.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* params方式注册路由 */}
      {/* <Route path="/home/message/:id/:title" component={Detail} /> */}
      {/* search和state方式注册路由 */}
      <Route path="/home/message" component={Detail} />
    </>
  );
};
export default Message;
