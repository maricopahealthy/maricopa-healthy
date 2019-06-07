import React from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Design";
import Manage from "./components/Manage"

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/design" component={Create}/>
                <Route path="/build" component={Create}/>
                <Route path="/analytics" component={Create}/>
                <Route path="/customers" component={Create}/>
                <Route path="/notifications" component={Create}/>
                <Route path="/transactions" component={Create}/>
                <Route path="/settings" component={Create}/>
            </Router>
        </div>
    );
}

export default App;
