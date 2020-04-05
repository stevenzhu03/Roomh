import React from 'react';
 
class Login extends React.Component {

  // state = {
  //   username: "",
  //   password: ""
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleLogIn = (e) => {
  //   e.preventDefault()
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //       headers: { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: JSON.stringify(this.state)
  //   })
  //   .then(resp => resp.json())
  //   .then(response => {
  //     if (response.errors){
  //       alert(response.errors)
  //     } else {
  //       this.props.setUser(response)
  //     }
  //   })
  // }

  render() {
    return (
      <div className="login-form">
      </div>
    )
  }
}
 
export default Login;