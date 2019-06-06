import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Nav extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			createDropdown: false,
			manageDropdown: false
  };
}
  handleDropdown = e => {
    e.persist();
    let dropdown = e.target.id;
    this.setState(prevState => ({
      [dropdown]: !prevState[dropdown]
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className={"nav-container"}>
        <Route>
          <div className={"nav-dashboard-container"}>
            <Link to={"/dashboard"} className={"nav-dashboard-link"}>
              Dashboard
            </Link>
          </div>
          <div
            className={"nav-dashboard-container"}
            id={"createDropdown"}
            onClick={this.handleDropdown}
          >
            <span className={"nav-dashboard-link"}>Create</span>
            {this.state.createDropdown ? (
              <span>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/design"} className={"nav-dashboard-link"}>
                    Design
                  </Link>
                </div>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/build"} className={"nav-dashboard-link"}>
                    Build
                  </Link>
                </div>
              </span>
            ) : null}
          </div>
          <div
            className={"nav-dashboard-container"}
            id={"manageDropdown"}
            onClick={this.handleDropdown}
          >
            <span className={"nav-dashboard-link"}>Manage</span>
            {this.state.manageDropdown ? (
                <span>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/analytics"} className={"nav-dashboard-link"}>
                    App Analytics
                  </Link>
                </div>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/customers"} className={"nav-dashboard-link"}>
                    Customers
                  </Link>
                </div>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/notifications"} className={"nav-dashboard-link"}>
                    Push Notifications
                  </Link>
                </div>
                <div className={"nav-dashboard-container"}>
                  <Link to={"/transactions"} className={"nav-dashboard-link"}>
                    Transactions
                  </Link>
                </div>
              </span>
            ) : null}
          </div>
          <div className={"nav-dashboard-container"}>
            <Link to={"/settings"} className={"nav-dashboard-link"}>
              Settings
            </Link>
          </div>
        </Route>
      </div>
    );
  }
}

export default Nav;
