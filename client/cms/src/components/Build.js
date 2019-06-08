import React from 'react'
import Features from './Features.js'
import Nav from './Nav'
import HeaderNav from './HeaderNav'

class Build extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: 'Markets'
        }
    }
    render(){
        return(<div className={"build-container"}>
            <HeaderNav/>
            <Nav/>
            <div className={"features-container"}>
            <Features/>
            </div>
        </div>)
    }
}

export default Build