/**
 * 登录组件
 * 用户名 密码 登录
 */
import React from "react";

interface LoginState {
  username: string;
  password: string;
}
class Login extends React.Component<{}, LoginState> {
  state: Readonly<LoginState> = {
    username: "",
    password: "",
  };

  submitFormData = (dataType: keyof LoginState) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ [dataType]: e.target.value } as Pick<
        LoginState,
        keyof LoginState
      >);
    };
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(`用户名为${username}，密码为${password}`);
  };
  render(): React.ReactNode {
    // const { username, password } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          用户名：
          <input onChange={this.submitFormData("username")} type="text" />
          &nbsp; 密码：
          <input onChange={this.submitFormData("password")} type="password" />
          &nbsp;
          <button>登录</button>
        </form>
      </>
    );
  }
}

export default Login;
