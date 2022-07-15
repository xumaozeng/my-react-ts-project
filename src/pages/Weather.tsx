/**
 * 天气炎热组件
 * isHot:true/false
 */
import React from "react";

interface WeatherState {
  isHot: boolean;
}
class Weather extends React.Component<{}, WeatherState> {
  state: Readonly<WeatherState> = {
    isHot: true,
  };

  handleChange = (e: React.MouseEvent): void => {
    console.log(this);
    this.setState(prevState => {
      return { isHot: !prevState.isHot };
    });
  };

  render(): React.ReactNode {
    const { isHot } = this.state;
    const text = isHot ? "炎热" : "凉爽";
    return (
      <div style={{ height: "100px", backgroundColor: "greenyellow" }}>
        <h2 onClick={this.handleChange}>今天天气很{text}</h2>
      </div>
    );
  }
}

export default Weather;
