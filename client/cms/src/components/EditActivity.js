import React from 'react';
import { Link } from 'react-router-dom';

class EditActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: []
		};
		this.fetchActivities = this.fetchActivities.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	fetchActivities(activityId = this.props.match.params.id) {
		fetch(`http://localhost:9000/active/${activityId}`).then((res) => res.json()).then((data) => {
			let activities = data[0];
			this.setState({
				activities
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
		fetch('http://localhost:9000/activity/patch');
	}

	componentDidMount() {
		this.fetchActivities();
		console.log(this.state);
	}

	componentDidUpdate(prevProps) {
		const currentActivityId = this.props.match.params.id;
		const prevActivityId = prevProps.match.params.id;
		if (prevActivityId !== currentActivityId) {
			this.fetchActivities(currentActivityId);
		}
	}

	render() {
		let activity = this.state.activities || [];
		console.log(activity, 'activity IN COMPONENT');
		return (
			<div className={'editActivity-container'}>
				<h3>Edit Activity</h3>
				<Link to={'/build/activity'}>
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
							<img alt="activitys thumbnail" src={activity.thumbnail} />
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
