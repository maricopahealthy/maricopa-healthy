import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Analytics from './Analytics';
import Notifications from './Notifications';
import Promocode from './Promocode';
import Appadmin from './Appadmin';
import Cmsadmin from './Cmsadmin';


class Main extends React.Component {

    state = {
        selected: 'analytics',

    };

    menuSelect = (selection) => {
        const selected = this.state.selected;

        this.setState({ selected: selection });
    };

    showContent = () => {

        if (this.state.selected == 'analytics') {
            return <Analytics />
        }
        else if
            (this.state.selected == 'notifications') {
            return <Notifications />
        }
        else if
            (this.state.selected == 'promocodes') {
            return <Promocode />
        }


    };

    render() {
        return (
            <div>
                <Header menuSelect={this.menuSelect} showContent={this.showContent} />

                <div className="container-main">

                    <div className="menu">


                        <div className={this.state.selected == 'analytics' ? 'menuitem-selected' : 'menuitem'} onClick={() => this.menuSelect('analytics')}>Analytics</div>

                        <div className={this.state.selected == 'notifications' ? 'menuitem-selected' : 'menuitem'} onClick={() => this.menuSelect('notifications')} >Notifications</div>

                        <div className={this.state.selected == 'promocodes' ? 'menuitem-selected' : 'menuitem'} onClick={() => this.menuSelect('promocodes')}>Promo Codes</div>

                        <div className={this.state.selected == 'cmsadmin' ? 'menuitem-selected' : 'menuitem'} onClick={() => this.menuSelect('cmsadmin')}>CMS Admin</div>

                        <div className={this.state.selected == 'appadmin' ? 'menuitem-selected' : 'menuitem'} onClick={() => this.menuSelect('appadmin')}>App Admin</div>

                    </div>
                    <div className="content">
                        {this.showContent()}

                    </div>
                </div>
            </div >
        );
    }

}
export default Main;


