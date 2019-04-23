import React from "react";
import '../css/style.css';

class Login extends React.Component {
    render() {
        return (
            <div class="login">

                <h3 className="loginHeader"> MaricopaHealthy CMS</h3>

                <form>

                    <input className="textbox" type="text" required placeholder="Username" /> <br />
                    <input className="textbox" type="text" required placeholder="Password" /> <br />
                    <button className="textbox" type="submit">login</button>

                </form>

            </div >

        );
    }
}

export default Login;