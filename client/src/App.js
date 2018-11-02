import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import './App.css';
import LoginForm from './containers/login_form';


class App extends Component {

  render() {
    console.log("App render",this.props.userLoggedIn);
    if (this.props.userLoggedIn)
      return ( 
        <Redirect to={{pathname: "/headlines"  }} /> 
    )            
    else return (
        <div className="App">
          <section>
            <LoginForm />
          </section>
        </div>
    )      
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

