import React from 'react';
import {reduxForm, Field} from 'redux-form'
 
// const renderInput = props => <Input/>

const SignUp = (props) => {
  

    return (
            <div className="signup-form-container">
                <form className="signup-form">
                  <Field name="username"/>
                  <input type="text"/>
                </form>
            </div>
    );
  
}


export default reduxForm({
  form: "signUp",
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