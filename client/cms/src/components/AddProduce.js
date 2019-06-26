import React from 'react';
import { Link } from 'react-router-dom';

class AddProduce extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			season: '',
			start_month: 'january',
			end_month: 'january',
			name: '',
			created_at: '',
			updated_at: ''
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
				<h3>Add Produce</h3>
				<Link to={'/build/produce'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleAdd}>
					Name of Produce:
					<input type={'text'} name={'name'} onChange={this.handleChange} />
					<br />
					Season:
					<br />
					<input type="checkbox" name="season" value="Spring" />Spring
					<input type="checkbox" name="season" value="Summer" />Summer
					<input type="checkbox" name="season" value="Fall" />Fall
					<input type="checkbox" name="season" value="Winter" />Winter
					<br />
					Start Month:
					<select>
						<option value="january" name="start_month" value="january">
							January
						</option>
						<option value="february" name="start_month" value="february">
							February
						</option>
						<option value="march" name="start_month" value="march">
							March
						</option>
						<option value="april" name="start_month" value="april">
							April
						</option>
						<option value="may" name="start_month" value="may">
							May
						</option>
						<option value="june" name="start_month" value="june">
							June
						</option>
						<option value="july" name="start_month" value="july">
							July
						</option>
						<option value="august" name="start_month" value="august">
							August
						</option>
						<option value="september" name="start_month" value="september">
							September
						</option>
						<option value="october" name="start_month" value="october">
							October
						</option>
						<option value="november" name="start_month" value="november">
							November
						</option>
						<option value="december" name="start_month" value="december">
							December
						</option>
					</select>
					<br />
					End Month:
					<select>
						<option value="january" name="end_month" value="january">
							January
						</option>
						<option value="february" name="end_month" value="february">
							February
						</option>
						<option value="march" name="end_month" value="march">
							March
						</option>
						<option value="april" name="end_month" value="april">
							April
						</option>
						<option value="may" name="end_month" value="may">
							May
						</option>
						<option value="june" name="end_month" value="june">
							June
						</option>
						<option value="july" name="end_month" value="july">
							July
						</option>
						<option value="august" name="end_month" value="august">
							August
						</option>
						<option value="september" name="end_month" value="september">
							September
						</option>
						<option value="october" name="end_month" value="october">
							October
						</option>
						<option value="november" name="end_month" value="november">
							November
						</option>
						<option value="december" name="end_month" value="december">
							December
						</option>
					</select>
					<br />
					Description:
					<input type={'text'} name={'description'} />
					<br />
					<button type={'submit'}>Add Activity</button>
				</form>
			</div>
		);
	}
}

export default AddProduce;
