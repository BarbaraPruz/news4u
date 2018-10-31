import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from '../components/article';

class SearchResults extends Component {


    render() {  
        // TODO: prevent from rendering old search results        
        return (
            <div className="search_results">
                <h2>Search Results</h2>
        {this.props.articles.map((article, id) => <Article key={id} article={article} />)}             
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
