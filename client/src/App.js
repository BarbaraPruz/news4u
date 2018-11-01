import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import LoginForm from './containers/login_form';
import HeadlinesContainer from './containers/headlines_container';

class App extends Component {


  render() {
    let container = (this.props.userLoggedIn) ? <HeadlinesContainer /> : <LoginForm />

    return (
      <div className="App">
        <section>
          {container}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

