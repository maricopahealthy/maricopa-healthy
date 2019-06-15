import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentActivities = ({ activities = activities || [], editActivity }) => {
	return (
		<ul onClick={editActivity}>
			<h3>Activities</h3>
			{activities.map((activity, id) => (
				<li id={(id += 1)} key={id}>
					<Link to={`/build/active/edit/${id}`}>Edit</Link>
					Name:
					{activity.name}
					<br />
					Thumbnail:
					{activity.thumbnail ? <div>{activity.thumbnail}</div> : ' none'}
					<br />
					Description:
					{activity.description}
					<br />
					Rating:
					{activity.rating}
					<br />
					Reviews:
					{activity.reviews}
					<br />
					Website:
					{activity.website ? <div>{activity.website}</div> : ' none'}
					<br />
					Created_at:
					{activity.created_at}
					<br />
					Updated_at:
					{activity.updated_at}
					<br />
				</li>
			))}
		</ul>
	);
};

export default CurrentActivities;
