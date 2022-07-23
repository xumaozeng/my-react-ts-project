/**
 * 一个简单的理由器
 * 路由组件和一般组件
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "@/components/Header";
import MyNavLink from "@/components/MyNavLink";
import About from "./About";
import Home from "./Home";
import Test from "./Test";

interface SimpleRouterProps {}
const SimpleRouter: React.FC<SimpleRouterProps> = props => {
  return (
    <>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Test} />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SimpleRouter;
