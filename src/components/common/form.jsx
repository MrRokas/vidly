import { Component } from "react";
import Joi from "joi";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label) {
    return (
      <Input
        value={this.state.data[name]}
        label={label}
        onChange={this.handleChange}
        name={name}
        error={this.state.errors[name]}
      />
    );
  }
}

export default Form;
