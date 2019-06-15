import React from 'react';
import CurrentEvents from './CurrentEvents';
import featureList from '../utils/featureList';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	handlePageClick(e) {
		let pageClicked = e.selected;
		// let wordsUsedForSearch = this.state.searchData;
		// this.getSearchResults(wordsUsedForSearch, pageClicked);
	}

	componentDidMount() {
		fetch('http://localhost:9000/events').then((res) => res.json()).then((events) => this.setState({ events }));
	}

	render() {
		return (
			<div className={'events-container'}>
				<Link to={'/build/events/add'}>
					<button>Add New Event</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.events.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					// onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentEvents events={this.state.events} />
			</div>
		);
	}
}

export default Events;
