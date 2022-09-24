import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";

class LoginForm extends Component {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propertySchema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = propertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    this.doSubmit();
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
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
