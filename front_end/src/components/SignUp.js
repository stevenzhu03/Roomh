import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { createUser } from '../actions'

class SignUp extends React.Component {

  renderError = meta => {
    if (meta.touched && meta.error) {
      return <div>{meta.error}</div>
    }
  }

  renderInput = formProps => {
    return (
      <div className="field">
        {formProps.icon}
        <input {...formProps.input} placeholder={formProps.label} type={formProps.type} />
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    if(formValues.password === formValues.passwordConfirmation) {
      this.props.createUser(formValues)
    } else {
          alert("Passwords don't match")
    }
  }

  render() {
    return (
          <div className="signup-page">
            <div className="signup-form-container">
              <h1>Sign Up</h1>
              <p>Find the perfect roommate</p>
                <form className="signup-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field name="username" type="text" component={this.renderInput} label="Username"/>
                  <Field name="email" type="text" component={this.renderInput} label="Email" />
                  <Field name="password" type="password" component={this.renderInput} label="Password" />
                  <Field name="passwordConfirmation" type="password" component={this.renderInput} label="Password Confirmation" />
                  <button className="signup-btn" type="submit" >Sign Up</button>
                </form>
            </div>
          </div>
    )
  }
  
}

const validate = formValues => {
  const errors = {}

  if(!formValues.username) {
    errors.username = "You must enter a username"
  }
  if(!formValues.email) {
    errors.email = "You must enter a email"
  }
  if(!formValues.password) {
    errors.password = "You must enter a password"
  }
  if(!formValues.passwordConfirmation) {
    errors.passwordConfirmation = "You must confirm password"
  }

  return errors
}

const formWrapped = reduxForm({
  form: "signUp",
  validate
})(SignUp);

export default connect(null, { createUser } )(formWrapped)
