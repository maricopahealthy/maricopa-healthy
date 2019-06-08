import React from 'react'
import {BrowserRouter as Route, Link} from "react-router-dom";
import Markets from './Markets.js'

const Features = () => {
    return (<div>
        <h6 className={"features-heading"}>FEATURES</h6>
        <Link to={"/build/markets"} className={"features-link"}>
            Markets
        </Link>

        <Route exact path={"/build/markets"} component={Markets} />

    </div>)
}

export default Features