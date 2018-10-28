import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewsContainer extends Component {

    componentDidMount() {
        console.log("News Container did mount for",this.props.newsType,'news sources',this.props.newsSources);
//    if logged in, start action to retrieve data for user 
        // if (this.props.isLoggedIn) {
        //     console.log(`News Container getting ${this.state.newsType} from ${this.props.newsSources}`);
        // }
    }

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
      isLoggedIn: state.user.isLoggedIn,
      newsSources: state.user.newsSources
    }
  }
  
export default connect(mapStateToProps)(NewsContainer);
