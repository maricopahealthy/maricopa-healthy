import React from 'react';
import { Link } from 'react-router-dom';

class AddActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			created_at: '',
			description: '',
			name: '',
			thumbnail: '',
			updated_at: '',
			rating: '',
			reviews: ''
		};
	}

	handleAdd = () => {
		this.setState({
			created_at: new Date(),
			updated_at: new Date()
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			created_at: new Date(),
			updated_at: new Date()
		});
	};

	render() {
		return (
			<div className={'add-build-modal'}>
				<h3>Add Activity</h3>
				<Link to={'/build/activity'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleAdd}>
					Name of Activity:
					<input type={'text'} name={'name'} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					<input type={'text'} name={'thumbnail'} onChange={this.handleChange} />
					Description:
					<input type={'text'} name={'description'} />
					<br />
					<button type={'submit'}>Add Activity</button>
				</form>
			</div>
		);
	}
}

export default AddActivity;
