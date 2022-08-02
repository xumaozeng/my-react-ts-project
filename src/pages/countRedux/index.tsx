/**
 * 容器组件只写和store相关的
 */

import { connect } from "react-redux";
import { DispatchProps, StateProps } from "./redux/types";
import Count from "./Count";
import { countAsyncIncrementAction, countDecrementAction, countIncrementAction } from "./redux/count_action";

const mapStateToProps = (state: number): StateProps => ({ count: state });

const mapDispatchToProps: DispatchProps = {
  increment: countIncrementAction,
  decrement: countDecrementAction,
  incrementAsync: countAsyncIncrementAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
