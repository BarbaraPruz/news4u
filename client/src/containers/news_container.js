import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewsContainer extends Component {

// /*     component did mount
//         if logged in, start action to retrieve sources for User  
//         tbd - if sources already availble, do action to get details
//         */

    render() {
        console.log("News Container",this.props);
        // if coming directly from <App> we have param, otherwise match to URI
        // TODO: figure out better way to pass as param from route
        let newsType = this.props.hasOwnProperty("newsType") ?  
            this.props.newsType : this.props.match.params.newsType;
        const userMessage = this.props.isLoggedIn ?
            <h2>News Container for {newsType}</h2>
          : <p>You need to be logged in to use this option</p>
        ;

        return (
            <div className="news_container">
            <section>
                {userMessage} 
            </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn
    }
  }
  
export default connect(mapStateToProps)(NewsContainer);
