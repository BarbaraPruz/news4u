import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {

    renderArticles = () => this.props.articles.map((hl, id) => <li key={id}>{hl.title}</li> )

    render() {  
        // TODO: prevent from rendering old search results        
        return (
            <div className="search_results">
                <h2>Search Results</h2>
                <ul>
                    {this.renderArticles() }
                </ul>                
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      articles: state.news.articles,
    }
  }
  
export default connect(mapStateToProps) (SearchResults);
