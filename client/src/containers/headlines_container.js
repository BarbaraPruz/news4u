import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeadlines } from '../actions/news'
import Headline from '../components/headline'

class HeadlinesContainer extends Component {

    componentDidMount() {
        //    if logged in, start action to retrieve data for user 
        if (this.props.isLoggedIn) {
            this.props.getHeadlines(this.props.newsSources)
        }
    }

    render() {
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="content-section">
                <h1>Headlines</h1>
                { this.props.headlines.map((hl, id) => <Headline headline={hl} key={id} /> ) }
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
      newsSources: state.user.newsSources,
      headlines: state.news.headlines
    }
  }
  
export default connect(mapStateToProps,{getHeadlines}) (HeadlinesContainer);
