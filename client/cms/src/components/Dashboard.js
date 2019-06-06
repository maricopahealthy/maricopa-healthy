import React from 'react'
import Nav from './Nav'
import HeaderNav from './HeaderNav'
import styles from '../styles.css'

const Dashboard = () => {
    return (
        <div className={"dashboard-container"}>
            <HeaderNav/>
            <Nav/>
            <div className={"overview-container"}>Overview</div>
        < /div>

    )
}

export default Dashboard