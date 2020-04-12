import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return <div>{meta.error}</div>;
    }
  };

  renderInput = (formProps) => {
    return (
      <div className="field">
        {formProps.icon}
        <input
          {...formProps.input}
          placeholder={formProps.label}
          type={formProps.type}
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.login(formValues);
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-form-container">
          <h1>Login</h1>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="username"
              component={this.renderInput}
              label="Username"
              type="text"
            />
            <Field
              name="password"
              component={this.renderInput}
              label="Password"
              type="password"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "login",
  validate,
})(Login);

export default connect(null, { login })(formWrapped);
