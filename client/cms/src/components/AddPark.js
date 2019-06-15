import React from 'react';
import { Link } from 'react-router-dom';

class AddPark extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.handleAdd = this.handleAdd.bind(this);
		// this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const event = this.state.events;
		return <div className={'addPark-container'} />;
	}
}

export default AddPark;
