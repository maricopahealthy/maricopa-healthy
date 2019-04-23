import React from 'react';
import ga_dummy from '../public/images/ga_dummy.png';

class Analytics extends React.Component {

    render() {
        return (
            <div className="analytics">

                <img src={ga_dummy} className="ga_dummy" />

            </div>
        );
    }
}

export default Analytics;
