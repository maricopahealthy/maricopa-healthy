import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';



class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
