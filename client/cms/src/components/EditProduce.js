import React from 'react';
import { Link } from 'react-router-dom';

class EditProduce extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			produce: []
		};
		this.fetchProduce = this.fetchProduce.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	fetchProduce(produceId = this.props.match.params.id) {
		fetch(`http://localhost:9000/produce/${produceId}`).then((res) => res.json()).then((data) => {
			let produce = data[0];
			this.setState({
				produce
			});
			console.log('STATE', this.state);
		});
	}

	handleDelete = () => {
		const id = this.state.produce.id;
		if (window.confirm('Are you sure you want to delete this produce?')) {
			fetch(`http://localhost:9000/produce/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(this.props.history.push('/build/produce'))
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
		fetch('http://localhost:9000/produce/patch');
	}

	componentDidMount() {
		this.fetchProduce();
		console.log(this.state);
	}

	componentDidUpdate(prevProps) {
		const currentProduceId = this.props.match.params.id;
		const prevProduceId = prevProps.match.params.id;
		if (prevProduceId !== currentProduceId) {
			this.fetchProduce(currentProduceId);
		}
	}

	render() {
		let produce = this.state.produce || [];
		console.log(produce, 'produce IN COMPONENT');
		return (
			<div className={'edit-build-modal'}>
				<h3>Edit produce</h3>
				<Link to={'/build/produce'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of Produce:
					<input type={'text'} name={'name'} defaultValue={produce.name} onChange={this.handleChange} />
					<br />
					Season:
					<input type={'text'} name={'season'} defaultValue={produce.season} onChange={this.handleChange} />
					<br />
					Start Month:
					<input type="text" name="start_month" defaultValue={produce.start_month} />
					<br />
					End Month:
					<input type="text" name="end_month" defaultValue={produce.end_month} />
					Created at:
					<div className={'produce-created-at'}>{produce.created_at}</div>
					<br />
					Last Updated:
					<div className={'produce-updated-at'}>{produce.updated_at}</div>
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

export default EditProduce;
