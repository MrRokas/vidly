import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Form from "./form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    const { data: account, errors } = this.state;

    return (
      <div className="container w-50">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            label={"Username"}
            onChange={this.handleChange}
            name={"username"}
            error={errors.username}
          />
          <Input
            value={account.password}
            label={"Password"}
            onChange={this.handleChange}
            name={"password"}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
