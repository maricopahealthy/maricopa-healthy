import React from 'react'
import Dashboard from "./Dashboard";
import Create from "./Create"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const Nav = () => {
    return (<div className={"nav-container"}>
        <Route>
        <div className={'nav-dashboard'}>
            <Link to={'/dashboard'}>Dashboard</Link>
        </div>
        <div className={'nav-create'}>
            <Link to={'/create'}>Create</Link>
        </div>
        <div className={'nav-settings'}>
            <Link to={'/settings'}>Settings</Link>
        </div>
        </Route>
    </div>)

}

export default Nav