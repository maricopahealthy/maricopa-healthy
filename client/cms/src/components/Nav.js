import React from 'react'
import Dashboard from "./Dashboard";
import Create from "./Create"
import {BrowserRouter as Router, Route} from "react-router-dom";

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Router>
                    <Link to '/dashboard'>Dashboard</Link>
                    <Link to '/create'>Create</Link>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/create" component={Create}/>
                </Router>
            </div>
        )
    }
}

export default Nav