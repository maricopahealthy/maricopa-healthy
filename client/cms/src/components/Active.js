import React from 'react';
import { Link } from 'react-router-dom';
import CurrentActivities from './CurrentActivities';
import ReactPaginate from 'react-paginate';
import paginateHelper from '../utils/paginateHelper';

class Active extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allActivities: [],
			displayedActivities: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:9000/active').then((res) => res.json()).then((allActivities) => {
			let displayedActivities = paginateHelper(0, allActivities);
			this.setState({ allActivities, displayedActivities });
		});
	}

	handlePageClick = ({ selected }) => {
		const allActivities = this.state.allActivities;
		let displayedActivities = paginateHelper(selected, allActivities);
		this.setState({ displayedActivities });
	};

	render() {
		return (
			<div className={'build-contain-inner-data'}>
				<Link to={'/build/active/add'}>
					<button>Add New Activity</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.allActivities.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentActivities activities={this.state.displayedActivities} />
			</div>
		);
	}
}

export default Active;
