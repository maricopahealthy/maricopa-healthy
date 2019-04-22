import React from 'react';
import Notification from './Notification';

class Notifications extends React.Component {

    render() {
        return (
            <div className='notifications'>
                <div clsssName="note-form">
                    <form ><input type="text" placeholder="Notification Content Here" required className="text-input" /><button type="submit">Send</button><button type="reset">Clear Fields</button></form>
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