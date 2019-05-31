import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {

    }
    render(){
        return(
            <div>
                <h3>Log in to Maricopa Healthy</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name={'username'} type={'text'} placeholder={'username'} onChange={this.handleChange}/>
                    <input name={'password'} type={'password'} placeholder={'password'} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login