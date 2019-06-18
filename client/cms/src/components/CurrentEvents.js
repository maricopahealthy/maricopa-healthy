import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentEvents = ({ events = events || [], editEvent }) => {
	return (
		<ul onClick={editEvent}>
			<h3>Approved Events</h3>
			{events.map((event, id) => (
				<li id={(id += 1)} key={id}>
					<Link to={`/build/events/edit/${id}`}>Edit</Link>
					Name:
					{event.name}
					<br />
					Thumbnail:
					{event.thumbnail ? <div>{event.thumbnail}</div> : ' none'}
					<br />
					Start Date:
					{event.start_date}
					<br />
					End Date:
					{event.end_date}
					<br />
					Start Time:
					{event.start_time}
					<br />
					End Time:
					{event.end_time}
					{event.frequency ? (
						<div>
							Frequency:
							{event.frequency}
						</div>
					) : null}
					Location:
					{event.location}
					<br />
					Description:
					{event.description}
					<br />
					{/*view more option here*/}
					Address:
					{event.address}
					<br />
					City:
					{event.city}
					<br />
					Zip Code:
					{event.zipcode}
					<br />
					State:
					{event.state}
					<br />
					Recurring:
					{event.recurring}
					<br />
					Ages:
					{event.ages}
					<br />
					Cost:
					{event.cost}
					<br />
					Phone:
					{event.phone}
					<br />
					Website:
					{event.website ? <div>{event.website}</div> : ' none'}
					<br />
					Created_at:
					{event.created_at}
					<br />
					Updated_at:
					{event.updated_at}
					<br />
				</li>
			))}
		</ul>
	);
};

export default CurrentEvents;
