import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import CurrentParks from './CurrentParks';
import paginateHelper from '../utils/paginateHelper';

class Parks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allParks: [],
			displayedParks: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:9000/parks').then((res) => res.json()).then((allParks) => {
			let displayedParks = paginateHelper(0, allParks);
			this.setState({ allParks, displayedParks });
		});
	}

	handlePageClick = ({ selected }) => {
		const allParks = this.state.allParks;
		let displayedParks = paginateHelper(selected, allParks);
		this.setState({ displayedParks });
	};

	render() {
		return (
			<div className={'build-contain-inner-data'}>
				<Link to={'/build/parks/add'}>
					<button>Add New Park</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.allParks.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentParks parks={this.state.displayedParks} />
			</div>
		);
	}
}

export default Parks;
