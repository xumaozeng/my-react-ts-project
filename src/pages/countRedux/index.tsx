/**
 * 容器组件只写和store相关的
 */

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionProps } from "./redux/types";
import Count from "./Count";
import { countAsyncIncrementAction, countDecrementAction, countIncrementAction } from "./redux/count_action";

function mapStateToProps(state: number) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch: Dispatch<ActionProps>) {
  return {
    increment: (value: number) => dispatch(countIncrementAction(value)),
    decrement: (value: number) => dispatch(countDecrementAction(value)),
    incrementAsync: (value: number, delay: number) => dispatch(countAsyncIncrementAction(value, delay))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
