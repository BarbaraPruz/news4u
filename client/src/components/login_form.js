import React, { Component } from 'react';

import {UserForm, UserInput, UserButton, UserLink} from './user_form_style.js';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    handleLogin = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <UserForm>
                <h1>news4u login</h1>
                <form onSubmit={ event => this.handleLogin(event) }>
                    <UserInput type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                    <UserInput type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                    <UserButton type="submit" >Login</UserButton>
                </form>
                <h4>New to news4u? <UserLink onClick={this.props.handleSwitchForm}>Sign Up!</UserLink></h4>
            </UserForm>        
        );
    }
}

export default LoginForm;

