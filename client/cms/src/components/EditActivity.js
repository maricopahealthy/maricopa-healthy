import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class EditActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: []
		};
	}

	fetchActivities = (activityId = this.props.match.params.id) => {
		console.log(activityId, 'ACTIVITyid');
		fetch(`http://localhost:9000/active/${activityId}`).then((res) => res.json()).then((data) => {
			console.log('DATAHHHHH', data);
			let activities = data[0];
			this.setState({
				activities
			});
		});
	};

	handleDelete = () => {
		const id = this.state.activities.id;
		if (window.confirm('Are you sure you want to delete this activity?')) {
			fetch(`http://localhost:9000/active/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(this.props.history.push('/build/active'))
				.then(window.location.reload());
		}
	};

	handleChange = (e) => {
		e.persist();
		this.setState({
			[e.target.name]: e.target.value,
			updated_at: new Date()
		});
	};

	handleEdit = () => {
		const id = this.state.activities.id;
		fetch(`http://localhost:9000/activity/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(this.props.history.push('/build/active'))
			.then(window.location.reload());
	};

	componentDidMount = () => {
		this.fetchActivities();
		console.log(this.props, 'props in activities');
	};

	componentDidUpdate = (prevProps) => {
		const currentActivityId = this.props.match.params.id;
		const prevActivityId = prevProps.match.params.id;
		if (prevActivityId !== currentActivityId) {
			this.fetchActivities(currentActivityId);
		}
	};

	render() {
		let activity = this.state.activities || [];
		console.log(activity, 'activity IN COMPONENT');
		return (
			<div className={'edit-build-modal'}>
				<h3>Edit Activity</h3>
				<Link to={'/build/active'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of activity:
					<input type={'text'} name={'name'} defaultValue={activity.name} onChange={this.handleChange} />
					<br />
					Description:
					<input
						type={'text'}
						name={'description'}
						defaultValue={activity.description}
						onChange={this.handleChange}
					/>
					<br />
					Thumbnail Image:
					{activity.thumbnail ? (
						<div>
							<input
								type={'text'}
								name={'thumbnail'}
								defaultValue={activity.thumbnail}
								onChange={this.handleChange}
							/>
							<img alt="activities thumbnail" src={activity.thumbnail} />
							<br />
						</div>
					) : (
						<input type="text" name="thumbnail" defaultValue="none" />
					)}
					Created at:
					<div className={'markets-created-at'}>{activity.created_at}</div>
					<br />
					Last Updated:
					<div className={'markets-updated-at'}>{activity.updated_at}</div>
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

export default EditActivity;
