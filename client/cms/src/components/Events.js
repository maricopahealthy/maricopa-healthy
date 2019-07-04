import React from 'react';
import CurrentEvents from './CurrentEvents';
import featureList from '../utils/featureList';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import paginateHelper from '../utils/paginateHelper';
import NoFilesToLoad from './NoFilesToLoad';

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allEvents: [],
			displayedEvents: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:9000/events').then((res) => res.json()).then((allEvents) => {
			let displayedEvents = paginateHelper(0, allEvents);
			this.setState({ allEvents, displayedEvents });
		});
	}

	handlePageClick = ({ selected }) => {
		const allProduce = this.state.allEvents;
		let displayedProduce = paginateHelper(selected, allProduce);
		this.setState({ displayedProduce });
	};

	render() {
		const events = this.state.displayedEvents;
		return (
			<div className={'build-contain-inner-data'}>
				<Link to={'/build/events/add'}>
					<button>Add New Event</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.allEvents.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				{events.length ? <CurrentEvents events={events} /> : <NoFilesToLoad />}
			</div>
		);
	}
}

export default Events;
