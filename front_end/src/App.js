import React from 'react';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <NavBar/>
      </div>
    )
  }
}

export default App;


