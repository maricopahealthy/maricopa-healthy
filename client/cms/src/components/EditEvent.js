import React from 'react';
import { Link } from 'react-router-dom';

class EditEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
		this.fetchEvent = this.fetchEvent.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	fetchEvent(eventId = this.props.match.params.id) {
		fetch(`http://localhost:9000/events/${eventId}`).then((res) => res.json()).then((data) => {
			console.log(events);
			let events = data[0];
			this.setState({
				events
			});
			console.log('STATE', this.state);
		});
	}

	handleDelete = () => {
		const id = this.state.events.id;
		if (window.confirm('Are you sure you want to delete this event?')) {
			fetch(`http://localhost:9000/events/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(this.props.history.push('/build/events'))
				.then(window.location.reload());
		}
	};

	handleChange(e) {
		e.persist();
		this.setState({
			[e.target.name]: e.target.value,
			updated_at: new Date()
		});
	}

	handleEdit() {
		//build out update functionality for server --patch or post?
		fetch('http://localhost:9000/events/patch');
	}

	componentDidMount() {
		this.fetchEvent();
		console.log(this.state);
	}

	componentDidUpdate(prevProps) {
		const currentMarketId = this.props.match.params.id;
		const prevMarketId = prevProps.match.params.id;
		if (currentMarketId !== prevMarketId) {
			this.fetchMarket(currentMarketId);
		}
	}

	render() {
		let event = this.state.events || [];
		console.log(event, 'EVENT IN COMPONENT');
		return (
			<div className={'edit-build-modal'}>
				<h3>Edit Event</h3>
				<Link to={'/build/event'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of Event:
					<input type={'text'} name={'name'} defaultValue={event.name} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					{event.thumbnail ? (
						<div>
							<input
								type={'text'}
								name={'thumbnail'}
								defaultValue={event.thumbnail}
								onChange={this.handleChange}
							/>
							<img alt="events thumbnail" src={event.thumbnail} />
							<br />
						</div>
					) : (
						<input type="text" name="thumbnail" defaultValue="none" />
					)}
					Address:
					<input type={'text'} name={'address'} defaultValue={event.address} />
					<br />
					Zip Code:
					<input type={'text'} name={'zipcode'} defaultValue={event.zipcode} />
					State:
					<input type={'text'} name={'state'} defaultValue={event.state} />
					<br />
					<hr />
					Ages:
					<input type={'text'} name={'ages'} defaultValue={event.ages} />
					<br />
					Cost:
					<input type={'text'} name={'cost'} defaultValue={event.cost} />
					<br />
					Phone:
					<input type={'tel'} name={'phone'} defaultValue={event.phone} />
					<br />
					Website:
					{event.website ? (
						<input type={'text'} name={'website'} defaultValue={event.website} />
					) : (
						<input type={'text'} name={'website'} defaultValue={'none'} />
					)}
					<br />
					Payment Methods:
					<input type={'text'} name={'payment_methods'} defaultValue={event.payment_methods} />
					<br />
					Event Frequency:
					{event.frequency ? (
						<input type={'text'} name={'frequency'} defaultValue={event.frequency} />
					) : (
						<input type={'text'} name={'frequency'} defaultValue={'none'} />
					)}
					<br />
					Recurring:
					<br />
					<input type="radio" name="recurring" value="true" />True
					<input type="radio" name="recurring" value="false" />False
					<br />
					Created at:
					<div className={'markets-created-at'}>{event.created_at}</div>
					<br />
					Last Updated:
					<div className={'markets-updated-at'}>{event.updated_at}</div>
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

export default EditEvent;
