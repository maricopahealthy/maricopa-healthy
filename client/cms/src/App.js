import React from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Build from "./components/Build";
import Markets from './components/Markets'
import AddMarket from './components/AddMarket'
import EditMarket from './components/EditMarket'
import Events from './components/Events'
import AddEvent from './components/AddEvent'
import EditEvent from './components/EditEvent'
import Design from './components/Design'

import Manage from "./components/Manage"
import styles from './styles.css'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/design" component={Design}/>
                <div className={"build-container"}>
                <Route path="/build" component={Build}/>
                    <Route path='/build/markets' component={Markets} />
                        <Route path='/build/markets/add' component={AddMarket} />
                        <Route path='/build/markets/edit/:id' component={EditMarket} />
                <Route path='/build/events' component={Events} />
                    <Route path='/build/events/add' component={AddEvent} />
                    <Route path='/build/events/edit/:id' component={EditEvent} />
                </div>
                <Route path="/analytics"  component={Build}/>
                <Route path="/customers" component={Build}/>
                <Route path="/notifications" component={Build}/>
                <Route path="/transactions" component={Build}/>
                <Route path="/settings" component={Build}/>
            </Router>
        </div>
    );
}

export default App;
