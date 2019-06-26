import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentParks = ({ parks = parks || [], editPark }) => {
	return (
		<ul onClick={editPark}>
			<h3>Parks</h3>
			{parks.map((park, id) => (
				<li id={(id += 1)} key={id}>
					<Link to={`/build/parks/edit/${id}`}>Edit</Link>
					<br />
					Thumbnail
					<img src={park.thumbnail} />
					<br />
					Name:
					{park.name}
					<br />
					Address:
					{park.street_address}
					<br />
					City:
					{park.city}
					Zip Code:
					{park.zipcode}
					<br />
					Phone Number:
					{park.phone_number}
					<br />
					Average Rating:
					{park.rating}
					<br />
					Reviews:
					{park.reviews}
					<br />
					Website Url:
					{park.website}
				</li>
			))}
		</ul>
	);
};

export default CurrentParks;
