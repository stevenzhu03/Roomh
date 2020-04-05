import React from 'react';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp';
import UserContainer from './components/UserContainer';

import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <NavBar/>
        <Route exact path="/login" render={() => <Login />}/>
        <Route exact path="/signup" render={() => <SignUp />}/>
        <Route exact path="/users" render={() => <UserContainer />}/>
      </div>
    )
  }
}

export default App;


