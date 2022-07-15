/**
 * 组件的生命周期
 */

import React from "react";

interface LifeState {
  count: number;
}
class Life extends React.Component<{}, LifeState> {
  constructor(props: {}) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }
  add = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return { count: 109 };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render(): React.ReactNode {
    console.log("render");

    return (
      <>
        <h2>React生命周期-{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </>
    );
  }
}

export default Life;
