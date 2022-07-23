/**
 * 一般组件
 */

import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface MyNavLinkProps {
  to: string;
  children: ReactNode;
}
const MyNavLink: React.FC<MyNavLinkProps> = props => {
  return <NavLink activeClassName="xiaoxu" className="list-group-item" {...props} />;
};
export default MyNavLink;
