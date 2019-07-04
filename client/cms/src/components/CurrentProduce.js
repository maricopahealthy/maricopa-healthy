import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentProduce = ({ produce = produce || [], editProduce }) => {
	return (
		<ul onClick={editProduce}>
			<h3>Produce</h3>
			{produce.map((produceItem) => (
				<li id={produceItem.id} key={produceItem.id}>
					<Link to={`/build/produce/edit/${produceItem.id}`}>Edit</Link>
					<br />
					Name:
					{produceItem.name}
					<br />
					Season:
					{produceItem.season}
					<br />
					Start_month:
					{produceItem._start_month}
					<br />
					End_month:
					{produceItem.end_month}
					<br />
					Created At:
					{produceItem.created_at}
					<br />
					Updated At:
					{produceItem.updated_at}
				</li>
			))}
		</ul>
	);
};

export default CurrentProduce;
