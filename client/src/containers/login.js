import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/user';
import {Splash, UserForm, UserInput, UserButton} from './landing_page_style.js';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <Splash>
                <UserForm>
                    <h1>news4u login</h1>
                    <form onSubmit={ event => this.handleLogin(event) }>
                        <UserInput type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                        <UserInput type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                        <UserButton type="submit" >Login</UserButton>
                    </form>
                    <h4>New to news4u?  <a href="/signup">Sign Up!</a></h4>  
                </UserForm>        
            </Splash>
        );
    }
}

export default connect(null,{loginUser})(Login)

