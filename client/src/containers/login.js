import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log("Login",this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <div className="loginform">
                <h2>Login</h2>
                <form onSubmit={ event => this.handleLogin(event) }>
                    <FormGroup>
                        <FormControl type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Name" />
                        <FormControl type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                    </FormGroup>{' '}
                    <Button type="submit" >Login</Button>
                </form>           
            </div>
        );
    }
}

export default Login;