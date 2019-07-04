import React from 'react';
import { Link } from 'react-router-dom';

class EditMarket extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			created_at: '',
			hours: [],
			name: '',
			payment_methods: '',
			phone_number: '',
			rating: '',
			reviews: '',
			state: '',
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

	fetchMarket = (marketId = this.props.match.params.id) => {
		fetch(`http://localhost:9000/markets/${marketId}`).then((res) => res.json()).then((markets) => {
			console.log(markets);
			let market = markets[0];
			this.setState({
				city: market.city,
				created_at: market.created_at,
				hours: market.hours,
				name: market.name,
				payment_methods: market.payment_methods,
				phone_number: market.phone_number,
				rating: market.rating,
				reviews: market.reviews,
				state: market.state,
				street_address: market.street_address,
				thumbnail: market.thumbnail,
				updated_at: market.updated_at,
				website_url: market.website_url,
				zipcode: market.zipcode
			});
		});
	};

	handleDelete = () => {
		const id = this.state.markets.id;
		if (window.confirm('Are you sure you want to delete this market?')) {
			fetch(`http://localhost:9000/markets/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(this.props.history.push('/build/markets'))
				.then(window.location.reload());
		}
	};

	handleChange = (e, index) => {
		e.persist();
		index !== undefined
			? this.setState((prevState) => {
					const hours = [ ...prevState.hours ];
					hours[index] = { ...hours[index], [e.target.name]: e.target.value };
					return { hours };
				})
			: this.setState({
					[e.target.name]: e.target.value,
					updated_at: new Date()
				});
	};

	handleEdit = () => {
		//build out update functionality for server --patch or post?
		fetch('http://localhost:9000/markets/patch');
	};

	componentDidMount() {
		this.fetchMarket();
	}

	componentDidUpdate(prevProps) {
		const currentMarketId = this.props.match.params.id;
		const prevMarketId = prevProps.match.params.id;
		if (currentMarketId !== prevMarketId) {
			this.fetchMarket(currentMarketId);
		}
	}

	render() {
		return (
			<div className={'edit-build-modal'}>
				<h3>Edit Market</h3>
				<Link to={'/build/markets'}>
					<button>X</button>
				</Link>
				<form onSubmit={this.handleEdit}>
					Name of Event:
					<input type={'text'} name={'name'} defaultValue={this.state.name} onChange={this.handleChange} />
					<br />
					Thumbnail Image:
					<input
						type={'text'}
						name={'thumbnail'}
						defaultValue={this.state.thumbnail}
						onChange={this.handleChange}
					/>
					<img alt="markets thumbnail" src={this.state.thumbnail} />
					<br />
					Address:
					<input type={'text'} name={'street_address'} defaultValue={this.state.street_address} />
					<br />
					Zip Code:
					<input type={'text'} name={'zipcode'} defaultValue={this.state.zipcode} />
					State:
					<input type={'text'} name={'state'} defaultValue={this.state.state} />
					<br />
					<hr />
					{this.state.hours.length ? (
						<div>
							Hours
							<br />
							{this.state.hours.map((hour, id) => {
								return (
									<span key={id}>
										Header:
										<input
											type={'text'}
											name={'header'}
											defaultValue={hour.header}
											onChange={(e) => {
												this.handleChange(e, id);
											}}
										/>
										<br />
										Body:
										<input
											type={'text'}
											name={'body'}
											defaultValue={hour.body}
											onChange={(e) => {
												this.handleChange(e, id);
											}}
										/>
										<br />
									</span>
								);
							})}
							<button onClick={this.addMoreHours}>+</button>
						</div>
					) : null}
					<hr />
					Contact Phone:
					<input type={'tel'} name={'phone_number'} defaultValue={this.state.phone_number} />
					<br />
					Website Url:
					<input type={'text'} name={'website'} defaultValue={this.state.website_url} />
					<br />
					Payment Methods:
					<input type={'text'} name={'payment_methods'} defaultValue={this.state.payment_methods} />
					<br />
					Created at:
					<div className={'markets-created-at'}>{this.state.created_at}</div>
					<br />
					Last Updated:
					<div className={'markets-updated-at'}>{this.state.updated_at}</div>
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

export default EditMarket;
