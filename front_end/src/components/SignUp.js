import React from 'react';
import {reduxForm, Field} from 'redux-form'
 
// const renderInput = props => <Input/>

class SignUp extends React.Component {

  renderInput(formProps) {
    console.log(formProps)
    return (
      <div className="field">
        <input {...formProps.input} placeholder={formProps.label} />
        <div>{formProps.meta.error}</div>
      </div>
    )
  }

  onSubmit = formValues => {
    console.log(formValues)
  }

  render() {
    return (
            <div className="signup-form-container">
                <form className="signup-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field name="username" component={this.renderInput} label="Username" />
                  <Field name="email" component={this.renderInput} label="Email" />
                  <Field name="password" component={this.renderInput} label="Password" />
                  <Field name="passwordConfirmation" component={this.renderInput} label="Password Confirmation" />
                  <button type="submit" >Submit</button>
                </form>
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

export default reduxForm({
  form: "signUp",
  validate
})(SignUp);




          // state = { 
          //   username: "",
          //   password: "",
          //   age: null,
          //   passwordConfirmation: ""
          // }
        
          // handleChange = (event) => {
          //   this.setState({
          //     [event.target.name]: event.target.value
          //   })
          // }
        
          // handleSubmit = (e) => {
          //   e.preventDefault()
          //   if (this.state.password === this.state.passwordConfirmation){
          //     fetch('http://localhost:3000/signup', {
          //       method: 'POST',
          //       headers: { 
          //         'Content-Type': 'application/json',
          //         'Accept': 'application/json'
          //       },
          //       body: JSON.stringify({
          //         username: this.state.username,
          //         password: this.state.password,
          //         age: parseInt(this.state.age)
          //       })
          //     })
              // .then(resp => resp.json())
          //     .then(response => {
          //       if (response.errors) {
          //         alert(response.errors)
          //       } else {
          //         this.props.setUser(response)
          //       }
          //     }
          //     )
          //   } else {
          //     alert("Passwords don't match")
          //   }
          // }