import React from 'react'

class EditMarket extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city: '',
            created_at: '',
            hours: [],
            name: '',
            payment_methods: '',
            phone_number: '',
            rating: '',
            reviews: '',
            state: '',
            street_address: '',
            thumbnail: '',
            updated_at: '',
            website_url: '',
            zipcode: ''
        }
        this.fetchMarket = this.fetchMarket.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    fetchMarket(marketId = this.props.match.params.id){
        fetch(`http://localhost:9000/markets/${marketId}`)
            .then(res => res.json())
            .then(markets => {
                console.log(markets)
                let market = markets[0]
                this.setState({
                    city: market.city,
                    created_at: market.created_at,
                    hours: [],
                    name: market.name,
                    payment_methods: market.payment_methods,
                    phone_number: market.phone_number,
                    rating: market.rating,
                    reviews: market.reviews,
                    state: market.state,
                    street_address: market.street_address,
                    thumbnail: market.thumbnail,
                    updated_at: market.updated_at,
                    website_url: market.website_url,
                    zipcode: market.zipcode
                })
            })
    }
    handleDelete(){
        //run some sort of alert asking for confirmation
        //send delete request to server
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state, 'state')
    }
    handleEdit(){
        //build out update functionality for server --patch or post?
        fetch('http://localhost:9000/markets/patch')
    }
    componentDidMount(){
        this.fetchMarket()
    }
    componentDidUpdate(prevProps) {
        const currentMarketId = this.props.match.params.id;
        const prevMarketId = prevProps.match.params.id
        if(currentMarketId !== prevMarketId){
            this.fetchMarket(currentMarketId)
        }
    }
    render(){
        return(<div className={"editMarket-container"}>
            {/*{this.state.length ? () : null }*/}
            <form onSubmit={this.handleEdit}>
                Name of Event:
                <input type={"text"} name={"name"} defaultValue={this.state.name} onChange={this.handleChange}/>
                Thumbnail Image:
                <input type={"text"} name={"thumbnail"} defaultValue={this.state.thumbnail} onChange={this.handleChange}/>
                <img alt="markets-thumbnail" src={this.state.thumbnail}/>
                Address:
                <input type={"text"} name={"street_address"} defaultValue={this.state.street_address}/>
                Created at:
                <div className={"markets-created-at"}>{this.state.created_at}</div>
                Last Updated:
                <div className={"markets-updated-at"}>{this.state.updated_at}</div>
                {/*{this.state.hours.map(hour => {*/}
                {/*    {<input type={"text"} name="hours" value={hour}/>}*/}
                {/*})}*/}
                Payment Methods:
                <input type={"text"} name={"payment_methods"} defaultValue={this.state.payment_methods}/>
                Contact Phone:
                <input type={"tel"} name={"phone_number"} defaultValue={this.state.phone_number}/>
                State:
                <input type={"text"} name={"state"} defaultValue={this.state.state}/>
                Website Url:
                <input type={"text"} name={"website"} defaultValue={this.state.website_url}/>
                Zip Code:
                <input type={"text"} name={"zipcode"} defaultValue={this.state.zipcode}/>

                <button type={"delete"} onClick={this.handleDelete}>Delete</button>
                <button type={"submit"}>Update</button>
            </form>
        </div>)
    }
}

export default EditMarket

// {id: 1, name: "Avondale Care1st Resource Center Farmers Market", thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-01.png", street_address: "16838 E Ave of the Fountains", city: "Fountain Hills", …}
// city: "Fountain Hills"
// created_at: "2019-06-04T04:08:07.607Z"
// hours: (2) [{…}, {…}]
// id: 1
// name: "Avondale Care1st Resource Center Farmers Market"
// payment_methods: "Cash, Check, Visa"
// phone_number: "555-555-5555"
// rating: "4.2 stars"
// reviews: "37 reviews"
// state: "AZ"
// street_address: "16838 E Ave of the Fountains"
// thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-01.png"
// updated_at: "2019-06-04T04:08:07.607Z"
// website_url: "https://placeholder.com/"
// zipcode: "85268"