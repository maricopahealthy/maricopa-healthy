import React from 'react'

class Markets extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markets:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:9000/markets')
            .then(res => res.json())
            .then(markets => this.setState({markets}))
    }

    render(){
        return (<div>
            THIS IS WHERE THE MARKETS IS
        </div>)
    }

}

export default Markets