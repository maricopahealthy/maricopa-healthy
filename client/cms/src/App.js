import React from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact component={Login} />
        </Router>
    </div>
  );
}

export default App;
