import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import CurrentProduce from './CurrentProduce';
import paginateHelper from '../utils/paginateHelper';

class Produce extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allProduce: [],
			displayedProduce: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:9000/produce').then((res) => res.json()).then((allProduce) => {
			let displayedProduce = paginateHelper(0, allProduce);
			this.setState({ allProduce, displayedProduce });
		});
	}

	handlePageClick = ({ selected }) => {
		const allProduce = this.state.allProduce;
		let displayedProduce = paginateHelper(selected, allProduce);
		this.setState({ displayedProduce });
	};

	render() {
		return (
			<div className={'build-contain-inner-data'}>
				<Link to={'/build/produce/add'}>
					<button>Add New Produce</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					initialPage={1}
					pageCount={Math.ceil(this.state.allProduce.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentProduce produce={this.state.displayedProduce} />
			</div>
		);
	}
}

export default Produce;
