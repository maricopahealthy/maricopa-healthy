import React from 'react';
import { Link } from 'react-router-dom';
import CurrentActivities from './CurrentActivities';
import ReactPaginate from 'react-paginate';

class Active extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: []
		};
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	handlePageClick(e) {
		let pageClicked = e.selected;
		// let wordsUsedForSearch = this.state.searchData;
		// this.getSearchResults(wordsUsedForSearch, pageClicked);
	}

	componentDidMount() {
		fetch('http://localhost:9000/active')
			.then((res) => res.json())
			.then((activities) => this.setState({ activities }));
	}

	render() {
		return (
			<div className={'active-container'}>
				<Link to={'/build/active/add'}>
					<button>Add New Activity</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.activities.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					// onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentActivities activities={this.state.activities} />
			</div>
		);
	}
}

export default Active;
