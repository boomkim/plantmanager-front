import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);

	}


	componentDidMount() {

	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
	
		this.setState({
		  [name]: value
		});
	  }

	render() {
		return (
			<div>
				<Form>
					<div className="form-group">
						<label for="Email">이메일</label>
						<input 
							name="email" 
							type="email" 
							className="form-control" 
							id="Email" 
							aria-describedby="emailHelp"
							value={this.state.email} 
							onChange={this.handleInputChange}
							/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="Username">닉네임</label>
						<input 
							name="username" 
							type="text" 
							className="form-control" 
							id="Username"
							value={this.state.username}
							onChange={this.handleInputChange}/>
					</div>
					<div className="form-group">
						<label for="Password">비밀번호</label>
						<input 
							name="password" 
							type="password" 
							className="form-control" 
							id="Password"
							value={this.state.password}
							onChange={this.handleInputChange}
							/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</Form>
			</div>
		);
	}
}

Register.propTypes = {

};

export default Register;