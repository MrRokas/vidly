import React from "react";
import Form from "./common/form";
import Joi from "joi";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = Joi.object({
    username: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  });

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <>
        <div className="container w-50">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Register")}
          </form>
        </div>
      </>
    );
  }
}

export default RegisterForm;
