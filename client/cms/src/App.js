import React from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create" component={Create}/>
        </Router>
    </div>
  );
}

export default App;
