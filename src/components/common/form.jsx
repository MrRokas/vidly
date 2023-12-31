import { Component } from "react";
import Joi from "joi";
import Input from "./input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

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

    this.doSubmit();
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

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        name={name}
        error={errors[name]}
        type={type}
      />
    );
  }
}

export default Form;
