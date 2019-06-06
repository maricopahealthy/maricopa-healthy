import React from 'react'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        //send auth request to server
        fetch('/dashboard')
    };

    render() {
        return (
            <div className={'login-container'}>
                <h3>Log in to Maricopa Healthy</h3>
                <form onSubmit={this.handleSubmit}>
                    <input className={"login-username"} name={'username'} type={'text'} placeholder={'username'} onChange={this.handleChange}/>
                    <input className={"login-password"} name={'password'} type={'password'} placeholder={'password'} onChange={this.handleChange}/>
                    <button className={"login-submit"} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Login