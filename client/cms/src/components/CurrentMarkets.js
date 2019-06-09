import React from 'react'

const CurrentMarkets = ({markets = markets || [], editMarket}) => {
    return(
        <ul onClick={editMarket}>
            {markets.map((market, id) => (
                <li id={id} key={id}>
                    <img src={market.thumbnail}/>
                    {market.name}
                    {market.city}
                    {console.log(market)}
                    {market.hours.map(hour => hour.body)}
                    {market.payment_methods}
                    {market.phone_number}
                    {market.rating}
                    {market.reviews}
                    {market.street_address}
                    {market.updated_at}
                    {market.website_url}
                    {market.zipcode}
                </li>
            ))}
        </ul>
    )
}

export default CurrentMarkets