import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import 'App.css';
import LoginContainer from 'containers/login_container';

class App extends Component {

  render() {
    if (this.props.userLoggedIn)
      return ( 
        <Redirect to={{pathname: "/headlines"  }} /> 
    )            
    else return (
        <div className="App">
          <section>
            <LoginContainer />
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

