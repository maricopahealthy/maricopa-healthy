import React from 'react';
import { Link } from 'react-router-dom';

class AddMarket extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			created_at: '',
			hours: [ { header: '', body: '' } ],
			name: '',
			payment_methods: '',
			phone_number: '',
			rating: '',
			reviews: '',
			state: 'AZ',
			street_address: '',
			thumbnail: '',
			updated_at: '',
			website_url: '',
			zipcode: ''
		};
	}
	addMoreHours = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			hours: [ ...prevState.hours, { header: '', body: '' } ]
		}));
	};

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
				<h3>Add New Market</h3>
				<Link to={'/build/markets'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleAdd}>
					Name of Event:
					<input type={'text'} name={'name'} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					<input type={'text'} name={'thumbnail'} onChange={this.handleChange} />
					<img alt="markets thumbnail" src={this.state.thumbnail} />
					<br />
					Address:
					<input type={'text'} name={'street_address'} onChange={this.handleChange} />
					<br />
					Zip Code:
					<input type={'text'} name={'zipcode'} onChange={this.handleChange} />
					State:
					<input type={'text'} name={'state'} onChange={this.handleChange} />
					<br />
					<hr />
					Hours
					<br />
					{this.state.hours.map((hour, idx) => {
						return (
							<div key={idx}>
								Header:
								<input type={'text'} name={`header[${idx}]`} onChange={this.handleChange} />
								<br />
								Body:
								<input type={'text'} name={`body[${idx}]`} onChange={this.handleChange} />
								<br />
							</div>
						);
					})}
					<button onClick={this.addMoreHours}>+</button>
					<hr />
					Contact Phone:
					<input type={'tel'} name={'phone_number'} onChange={this.handleChange} />
					<br />
					Website Url:
					<input type={'text'} name={'website'} onChange={this.handleChange} />
					<br />
					Payment Methods:
					<input type={'text'} name={'payment_methods'} onChange={this.handleChange} />
					<br />
					<button type={'submit'}>Add</button>
				</form>
			</div>
		);
	}
}

export default AddMarket;
