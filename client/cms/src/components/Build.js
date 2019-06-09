import React from 'react'
import Features from './Features.js'
import Nav from './Nav'
import HeaderNav from './HeaderNav'
import Markets from "./Markets";
import {BrowserRouter as Route} from "react-router-dom";

class Build extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'Markets'
        }
    }

    render() {
        return (<span className={"build-container-inner"}>
            <HeaderNav/>
            <Nav/>
            <div className={"features-container"}>
                <Features/>
            </div>
        </span>)
    }
}

export default Build