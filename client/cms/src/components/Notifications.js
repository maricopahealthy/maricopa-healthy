import React from 'react';
import Notification from './Notification';

class Notifications extends React.Component {

    render() {
        return (
            <div className='notifications'>

                <div className='note-form'>
                    <h6>New Notification</h6>
                    <form ><input type="text" placeholder="Notification Content Here" required className="text-input" /><button type="submit" className="notebutton">Send</button><button type="reset" className="notebutton">Clear Fields</button></form>
                </div>

                <Notification />
                <Notification />
                <Notification />
                <Notification />

            </div>
        );
    }
}

export default Notifications;