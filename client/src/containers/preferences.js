import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preferences extends Component {

   render() {
        console.log("Preferences",this.props);
        // todo: match url to user logged in
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="preferences_container">
            <section>
                <h1>User Preferences</h1>
            </section>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
    }
  }
  
export default connect(mapStateToProps) (Preferences);
