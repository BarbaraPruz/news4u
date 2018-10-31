import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import './login.css';
import { loginUser } from '../actions/user';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log("Login",this.state);
        this.props.loginUser(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <div className="splash">
                <div className="login-form">
                    <h1>news4u login</h1>
                    <form onSubmit={ event => this.handleLogin(event) }>
                        <FormGroup>
                            <FormControl type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Name" />
                            <FormControl type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                        </FormGroup>{' '}
                        <Button type="submit" >Login</Button>
                    </form>   
                </div>        
            </div>
        );
    }
}

export default connect(null,{loginUser})(Login)

