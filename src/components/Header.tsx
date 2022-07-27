/**
 * 一般组件
 */

import React from "react";
import { withRouter } from "react-router-dom";
import H from "history";

interface HeaderProps {
  history: H.History<any>;
}
const Header: React.FC<HeaderProps> = props => {
  const { history } = props;

  function back() {
    history.goBack();
  }

  function forward() {
    history.goForward();
  }

  return (
    <>
      <h2>React Router Dom</h2>
      <button onClick={back}>后退</button>
      &nbsp;<button onClick={forward}>前进</button>
      <br />
      <br />
    </>
  );
};
export default withRouter(Header);
