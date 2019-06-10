import React from 'react'
import CurrentMarkets from './CurrentMarkets'
import EditMarket from './EditMarket'
import AddMarket from './AddMarket'
import featureList from "../utils/featureList";
import {Link} from "react-router-dom";

class Markets extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markets:[],
            editId: null
        }
        this.editMarket = this.editMarket.bind(this)
    }

    editMarket(e){
        this.setState({
            editId: e.target.id
        })
    }
    componentDidMount(){
        fetch('http://localhost:9000/markets')
            .then(res => res.json())
            .then(markets => this.setState({markets}))
    }

    render(){
        return (<div className={"markets-container"}>
            <CurrentMarkets markets={this.state.markets} editMarket={this.editMarket} />
        </div>
        )
    }

}

export default Markets