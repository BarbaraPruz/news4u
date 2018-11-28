import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from 'components/signup_form';
import LoginForm from 'components/login_form';
import { loginUser, signUpUser } from 'actions/user';

import styled from 'styled-components';
import img from 'images/holdingnewspaper2.jpg';

export const Splash = styled.div`
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${img});
    background-size: cover; 
`;


class LoginContainer extends Component {

    state = {
        newUser: false
    }

    handleSwitchForm = () => {
        this.setState((prevState) => ({newUser: !prevState.newUser}));
    } 

    render() {
        let form = this.state.newUser ? 
            <SignUpForm handleSwitchForm={this.handleSwitchForm} handleSubmit={this.props.signUpUser} /> 
          : <LoginForm handleSwitchForm={this.handleSwitchForm}  handleSubmit={this.props.loginUser} />
        return (
            <Splash>
                {form}
            </Splash>  
        );
    }
}

export default connect(null,{loginUser, signUpUser})(LoginContainer)
