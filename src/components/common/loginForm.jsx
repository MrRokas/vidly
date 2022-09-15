import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  validate = () => {
    return { username: "Username is required." };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    console.log("Submitted");
  };

  render() {
    const { account } = this.state;

    return (
      <div className="container w-50">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            label={"Username"}
            onChange={this.handleChange}
            name={"username"}
          />
          <Input
            value={account.password}
            label={"Password"}
            onChange={this.handleChange}
            name={"password"}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
