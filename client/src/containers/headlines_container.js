import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeadlines } from '../actions/news.js'

class HeadlinesContainer extends Component {

    componentDidMount() {
        console.log("Headlines Container did mount for news sources",this.props.newsSources);
        //    if logged in, start action to retrieve data for user 
        if (this.props.isLoggedIn) {
            this.props.getHeadlines(this.props.newsSources)
        }
    }

    // note other fields: content, publishedAt,url,urlToImage
    renderHeadlines = () => this.props.headlines.map((hl, id) => <li key={id}>{hl.title}-{hl.description}</li> )

    render() {
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="headlines_container">
            <section>
                <h1>Headlines</h1>
                <ul>
                    {this.renderHeadlines() }
                </ul>
            </section>
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
