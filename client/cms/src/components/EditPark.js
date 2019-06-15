import React from 'react';
import { Link } from 'react-router-dom';

class EditPark extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parks: []
		};
		this.fetchPark = this.fetchPark.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	fetchPark(parkId = this.props.match.params.id) {
		fetch(`http://localhost:9000/parks/${parkId}`).then((res) => res.json()).then((data) => {
			console.log(parks);
			let parks = data[0];
			this.setState({
				parks
			});
			console.log('STATE', this.state);
		});
	}

	handleDelete() {
		//run some sort of alert asking for confirmation
		//send delete request to server
	}

	handleChange(e) {
		e.persist();
		this.setState({
			[e.target.name]: e.target.value,
			updated_at: new Date()
		});
	}

	handleEdit() {
		//build out update functionality for server --patch or post?
		fetch('http://localhost:9000/parks/patch');
	}

	componentDidMount() {
		this.fetchPark();
		console.log(this.state);
	}

	componentDidUpdate(prevProps) {
		const currentParktId = this.props.match.params.id;
		const prevParktId = prevProps.match.params.id;
		if (currentParktId !== prevParktId) {
			this.fetchPark(currentParktId);
		}
	}

	render() {
		let park = this.state.parks || [];
		console.log(park, 'PARK IN COMPONENT');
		return (
			<div className={'editPark-container'}>
				<h3>Edit Park</h3>
				<Link to={'/build/park'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of park:
					<input type={'text'} name={'name'} defaultValue={park.name} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					{park.thumbnail ? (
						<div>
							<input
								type={'text'}
								name={'thumbnail'}
								defaultValue={park.thumbnail}
								onChange={this.handleChange}
							/>
							<img alt="parks thumbnail" src={park.thumbnail} />
							<br />
						</div>
					) : (
						<input type="text" name="thumbnail" defaultValue="none" />
					)}
					Address:
					<input type={'text'} name={'address'} defaultValue={park.address} />
					<br />
					Zip Code:
					<input type={'text'} name={'zipcode'} defaultValue={park.zipcode} />
					State:
					<input type={'text'} name={'state'} defaultValue={park.state} />
					<br />
					<hr />
					Phone:
					<input type={'tel'} name={'phone'} defaultValue={park.phone} />
					<br />
					Website:
					{park.website ? (
						<input type={'text'} name={'website'} defaultValue={park.website} />
					) : (
						<input type={'text'} name={'website'} defaultValue={'none'} />
					)}
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

export default EditPark;
