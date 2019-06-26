import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Build from './components/Build';
import Markets from './components/Markets';
import AddMarket from './components/AddMarket';
import EditMarket from './components/EditMarket';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import Parks from './components/Parks';
import AddPark from './components/AddPark';
import EditPark from './components/EditPark';
import Design from './components/Design';
import Active from './components/Active';
import EditActivity from './components/EditActivity';
import AddActivity from './components/AddActivity';
import Produce from './components/Produce';
import EditProduce from './components/EditProduce';
import AddProduce from './components/AddProduce';

import Manage from './components/Manage';
import styles from './styles.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/design" component={Design} />
				<div className={'build-container'}>
					<Route path="/build" component={Build} />
					<Route path="/build/markets" component={Markets} />
					<Route path="/build/markets/add" component={AddMarket} />
					<Route path="/build/markets/edit/:id" component={EditMarket} />
					<Route path="/build/events" component={Events} />
					<Route path="/build/events/add" component={AddEvent} />
					<Route path="/build/events/edit/:id" component={EditEvent} />
					<Route path="/build/parks" component={Parks} />
					<Route path="/build/parks/add" component={AddPark} />
					<Route path="/build/parks/edit/:id" component={EditPark} />
					<Route path="/build/active" component={Active} />
					<Route path="/build/active/add" component={AddActivity} />
					<Route path="/build/active/edit/:id" component={EditActivity} />
					<Route path="/build/produce" component={Produce} />
					<Route path="/build/produce/add" component={AddProduce} />
					<Route path="/build/produce/edit/:id" component={EditProduce} />
				</div>
				<Route path="/analytics" component={Build} />
				<Route path="/customers" component={Build} />
				<Route path="/notifications" component={Build} />
				<Route path="/transactions" component={Build} />
				<Route path="/settings" component={Build} />
			</Router>
		</div>
	);
}

export default App;
