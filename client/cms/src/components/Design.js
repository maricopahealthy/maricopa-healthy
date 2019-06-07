import React from 'react'
import HeaderNav from './HeaderNav'
import Nav from './Nav'

class Design extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="design-container">
                <HeaderNav/>
                <Nav/>
                this is the design component
            </div>
        )
    }
}

export default Design