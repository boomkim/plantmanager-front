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
		this.handleSubmit = this.handleSubmit.bind(this);

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
		
	handleSubmit(event) {
		const {email, username, password} = this.state;
		const data = { email, username, password };

		event.preventDefault();
		
		if (username === undefined || email === undefined || password === undefined) {
			alert("값이 충분하지 않습니다.");
		} else if (username === '' || email === '' || password === '') {
			alert("값이 충분하지 않습니다.");
		} else {
			fetch('/users',{
				method: "POST",
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(data)
			}).then(res => {
				if (res.status === 200) {
					alert('회원가입에 성공했습니다.');
					window.location.href = "/"
				} else {
					throw new Error("에러발생: http status code " + res.status);
				}
			}).catch( err => {
				console.log(err);
			})
		}
		
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="Email">이메일</label>
						<input 
							name="email" 
							type="email" 
							className="form-control" 
							id="Email" 
							aria-describedby="emailHelp"
							value={this.state.email} 
							onChange={this.handleInputChange}
							/>
						<small id="emailHelp" className="form-text text-muted">회원님의 소중한 개인정보는 회원관리의 목적으로만 사용됩니다.</small>
					</div>
					<div className="form-group">
						<label htmlFor="Username">닉네임</label>
						<input 
							name="username" 
							type="text" 
							className="form-control" 
							id="Username"
							value={this.state.username}
							onChange={this.handleInputChange}/>	
						<small id="usernameHelp" className="form-text text-muted">사용할 닉네임을 입력해주세요. </small>
					</div>
					<div className="form-group">
						<label htmlFor="Password">비밀번호</label>
						<input 
							name="password" 
							type="password" 
							className="form-control" 
							id="Password"
							value={this.state.password}
							onChange={this.handleInputChange}
							pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
							title="비밀번호는 숫자와 영문을 포함해 8글자 이상이어야 합니다."
							/>
						<small id="passwordHelp" className="form-text text-muted">비밀번호는 숫자와 영문을 포함해 8글자 이상이어야 합니다.</small>
					</div>
					<button type="submit" className="btn btn-primary">가입</button>
				</Form>
			</div>
		);
	}
}

Register.propTypes = {

};

export default Register;