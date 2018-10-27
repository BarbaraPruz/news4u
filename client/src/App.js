import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Login from './containers/login';
import NewsContainer from './containers/news_container';
import NavBar from './components/navbar';

class App extends Component {

  render() {
    let container = (this.props.userLoggedIn) ? <NewsContainer/> : <Login />

    return (
      <div className="App">
        <NavBar userLoggedIn={this.props.userLoggedIn} />
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
