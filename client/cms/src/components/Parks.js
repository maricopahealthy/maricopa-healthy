import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import CurrentParks from './CurrentParks';

class Parks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parks: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:9000/parks').then((res) => res.json()).then((parks) => this.setState({ parks }));
	}

	render() {
		return (
			<div className={'parks-container'}>
				<Link to={'/build/parks/add'}>
					<button>Add New Park</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.parks.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					// onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentParks parks={this.state.parks} />
			</div>
		);
	}
}

export default Parks;
