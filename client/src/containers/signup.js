import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpUser } from '../actions/user';
import {Splash, UserForm, UserInput, UserButton} from './landing_page_style.js';

class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.props.signUpUser(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <Splash>
                <UserForm>
                    <h1>news4u sign up</h1>
                    <form onSubmit={ event => this.handleSignUp(event) }>
                        <UserInput type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                        <UserInput type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                        <UserButton type="submit" >Sign Up</UserButton>
                    </form>   
                </UserForm>        
            </Splash>
        );
    }
}

export default connect(null,{signUpUser})(SignUp)

