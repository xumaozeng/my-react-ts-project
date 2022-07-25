import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from "@/components/MyNavLink";
import News from "./News";
import Message from "./message";

const Home: React.FC = () => {
  return (
    <>
      <h3>这是Home的内容</h3>
      <ul className="nav nav-tabs">
        <li>
          <MyNavLink to="/home/news">News</MyNavLink>
        </li>
        <li>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/home/news" component={News} />
        <Route path="/home/message" component={Message} />
        <Redirect to="/home/news" />
      </Switch>
    </>
  );
};
export default Home;
