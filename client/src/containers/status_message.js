import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatusMessage extends Component {

    render() {
        return (
            <p style={{color: 'red', fontSize: "1.5em"}}>
               {this.props.userMessage}
            </p>
        );
    }
}

const mapStateToProps = state => {
    return {
      userMessage: state.user.statusMessage,
    }
  }
export default connect(mapStateToProps)(StatusMessage)

