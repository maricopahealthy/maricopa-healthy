import React from 'react'
import HeaderNav from './HeaderNav'
import Nav from './Nav'

class Create extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="">
                <HeaderNav/>
                <Nav/>
            </div>
        )
    }
}

export default Create