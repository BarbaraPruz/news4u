import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Login from './containers/login';
import NewsContainer from './containers/news_container';

class App extends Component {

  render() {
    let container = (this.props.userLoggedIn) ? <NewsContainer/> : <Login />

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
