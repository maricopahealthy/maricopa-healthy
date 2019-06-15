import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CurrentMarkets = ({ markets = markets || [], editMarket }) => {
	return (
		<ul onClick={editMarket}>
			{markets.map((market, id) => (
				<li id={(id += 1)} key={id}>
					<Link to={`/build/markets/edit/${id}`}>Edit</Link>
					<br />
					Thumbnail
					<img src={market.thumbnail} />
					<br />
					Name:
					{market.name}
					<br />
					Address:
					{market.street_address}
					<br />
					City:
					{market.city}
					Zip Code:
					{market.zipcode}
					<br />
					Hours:
					{market.hours.map((hour) => hour.body)}
					<br />
					Methods of Payment:
					{market.payment_methods}
					<br />
					Phone Number:
					{market.phone_number}
					<br />
					Average Rating:
					{market.rating}
					<br />
					Reviews:
					{market.reviews}
					<br />
					Date Added:
					{market.created_at}
					<br />
					Last Updated:
					{market.updated_at}
					<br />
					Website Url:
					{market.website_url}
				</li>
			))}
		</ul>
	);
};

export default CurrentMarkets;
