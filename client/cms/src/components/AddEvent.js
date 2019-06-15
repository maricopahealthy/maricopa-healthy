import React from 'react';
import { Link } from 'react-router-dom';

class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			ages: '',
			city: '',
			cost: '',
			created_at: '',
			description: '',
			end_date: '',
			end_time: '',
			frequency: '',
			id: '',
			location: '',
			name: '',
			phone: '',
			recurring: false,
			start_date: '',
			start_time: '',
			state: 'AZ',
			thumbnail: '',
			updated_at: '',
			website: '',
			zipcode: ''
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleAdd() {
		this.setState({
			created_at: new Date(),
			updated_at: new Date()
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			created_at: new Date(),
			updated_at: new Date()
		});
	}

	render() {
		return (
			<div className={'addEvent-container'}>
				<h3>Add Event</h3>
				<Link to={'/build/events'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of Event:
					<input type={'text'} name={'name'} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					<input type={'text'} name={'thumbnail'} onChange={this.handleChange} />
					Address:
					<input type={'text'} name={'address'} />
					<br />
					Zip Code:
					<input type={'text'} name={'zipcode'} />
					State:
					<input type={'text'} name={'state'} />
					<br />
					<hr />
					Start Date:
					<input type={'date'} name={'start_date'} />
					<br />
					End Date:
					<input type={'date'} name={'end_date'} />
					<br />
					Start Time:
					<input type={'text'} name={'start_time'} />
					<br />
					End Time:
					<input type={'text'} name={'end_time'} />
					<br />
					<hr />
					Recurring:
					<br />
					<input type="radio" name="recurring" value="true" />True
					<input type="radio" name="recurring" value="false" />False
					<br />
					Ages:
					<input type={'text'} name={'ages'} />
					<br />
					Cost:
					<input type={'text'} name={'cost'} />
					<br />
					Phone:
					<input type={'tel'} name={'phone'} />
					<br />
					Website:
					<input type={'text'} name={'website'} />
					<br />
					Payment Methods:
					<input type={'text'} name={'payment_methods'} />
					<br />
					Event Frequency:
					<input type={'text'} name={'frequency'} />
					<br />
					<button type={'delete'} onClick={this.handleDelete}>
						Delete
					</button>
					<button type={'submit'}>Update</button>
				</form>
			</div>
		);
	}
}

export default AddEvent;
