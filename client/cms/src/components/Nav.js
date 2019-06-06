import React from 'react'
import Dashboard from "./Dashboard";
import Create from "./Create"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const Nav = () => {
    return (<div>
        <Route>
        <div><Link to={'/dashboard'}>Dashboard</Link></div>
            <div><Link to={'/create'}>Create</Link></div>
            <div><Link to={'/settings'}>Settings</Link></div>
        </Route>
    </div>)

}

export default Nav