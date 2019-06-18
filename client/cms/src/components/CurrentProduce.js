import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentProduce = ({ produce = produce || [], editProduce }) => {
	return (
		<ul onClick={editProduce}>
			{produce.map((produceItem, id) => (
				<li id={(id += 1)} key={id}>
					<Link to={`/build/produce/edit/${id}`}>Edit</Link>
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
