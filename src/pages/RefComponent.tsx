/**
 * ref属性
 */

import React, { createRef } from "react";

type T = any;
interface RefComponentState {
  isHot: boolean;
}
class RefComponent extends React.Component<{}, RefComponentState> {
  state: Readonly<RefComponentState> = {
    isHot: true,
  };
  myRef = createRef<HTMLInputElement>();
  input2: T = null;

  showData = (e: React.MouseEvent | React.FocusEvent): void => {
    const { myRef, input2 } = this;
    const { type } = e;
    if (type === "click") {
      alert(myRef.current?.value);
    } else if (type === "blur") {
      alert(input2.value);
    }
  };

  changeWeather = (): void => {
    const { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };

  render(): React.ReactNode {
    const { isHot } = this.state;

    return (
      <>
        <h2>今天天气很{isHot ? "炎热" : "凉爽"}</h2>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧数据</button>&nbsp;
        <input
          ref={c => (this.input2 = c)}
          onBlur={this.showData}
          type="text"
          placeholder="失去焦点提示数据"
        />
        <br />
        <br />
        <button onClick={this.changeWeather}>点我切换数据</button>
      </>
    );
  }
}

export default RefComponent;
