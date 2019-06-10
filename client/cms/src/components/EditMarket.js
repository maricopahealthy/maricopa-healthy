import React from 'react'

class EditMarket extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            marketPreEdit: [],
            marketPostEdit: []
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        //run some sort of alert asking for confirmation
        //send delete request to server
    }
    handleEdit(){
        //build out update functionality for server --patch or post?
        fetch('http://localhost:9000/markets/patch')
    }
    componentDidMount(){
        const marketId = this.props.match.params.id
        fetch(`http://localhost:9000/markets/${marketId}`)
            .then(res => res.json())
            .then(market => this.setState({marketPreEdit: market}))
    }
    render(){
        const market = this.state.marketPreEdit[0] || []
        {console.log(market)}
        return(<div className={"editMarket-container"}>
            <form onSubmit={this.handleEdit}>
                <input type={"number"} name={"id"} value={market.id}/>
                <input type={"text"} name={"name"} value={market.name}/>
                <input type={"text"} name={"thumbnail"} value={market.thumbnail}/>
                <input type={"text"} name={"street_address"} value={market.street_address}/>
                {/*<input type={"date"} name={"created_at"} value={market.created_at}/>*/}

                <input type={"text"} name={"payment_methods"} value={market.payment_methods}/>
                <input type={"tel"} name={"phone_number"} value={market.phone_number}/>
                <input type={"text"} name={"state"} value={market.state}/>
                <input type={"text"} name={"website"} value={market.website_url}/>
                <input type={"text"} name={"zipcode"} value={market.zipcode}/>
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