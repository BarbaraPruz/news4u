import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import './login.css';
import { signUpUser } from '../actions/user';

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
            <div className="splash">
                <div className="login-form">
                    <h1>news4u sign up</h1>
                    <form onSubmit={ event => this.handleSignUp(event) }>
                        <FormGroup>
                            <FormControl type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                            <FormControl type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                        </FormGroup>{' '}
                        <Button type="submit" >Sign Up</Button>
                    </form>   
                </div>        
            </div>
        );
    }
}

export default connect(null,{signUpUser})(SignUp)

