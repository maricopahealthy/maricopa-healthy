import React from 'react'
import {Link} from "react-router-dom";

const CurrentMarkets = ({markets = markets || [], editMarket}) => {
    return(
        <ul onClick={editMarket}>
            {markets.map((market, id) => (
                <li id={id} key={id}>
                    <Link to={`/build/markets/edit/${id}`}>Edit</Link>
                    <img src={market.thumbnail}/>
                    {market.name}
                    {market.city}
                    {market.hours.map(hour => hour.body)}
                    {market.payment_methods}
                    {market.phone_number}
                    {market.rating}
                    {market.reviews}
                    {market.street_address}
                    {market.update_at}
                    {market.website_url}
                    {market.zipcode}
                </li>
            ))}
        </ul>
    )
}

export default CurrentMarkets