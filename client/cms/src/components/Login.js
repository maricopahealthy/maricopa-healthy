import React from 'react';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		//send auth request to server
		fetch('/dashboard');
	};

	render() {
		return (
			<div className={'login-container-outer'}>
				<div className={'login-container'}>
					<img
						alt="maricopa healthy logo"
						src={'https://maricopa-healthy.s3-us-west-2.amazonaws.com/cms/maricopa-healthy-logo.png'}
						className={'login-logo'}
					/>
					{/*<h3>Log in</h3>*/}
					<form onSubmit={this.handleSubmit}>
						<input
							className={'login-username'}
							name={'username'}
							type={'text'}
							placeholder={'username'}
							onChange={this.handleChange}
						/>
						<input
							className={'login-password'}
							name={'password'}
							type={'password'}
							placeholder={'password'}
							onChange={this.handleChange}
						/>
						<button className={'login-submit'}>Log In</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
