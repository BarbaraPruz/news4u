import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from './search_form';
import SearchResults from './search_results';
import { searchNews } from '../actions/news';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchParams) {
        console.log("Search Container - handle search",searchParams);
        this.props.searchNews(this.props.newsSources,searchParams);
    }

    render() {
        console.log("Search Container render",this.props);
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="search_container">
                <h1>Search for Stories</h1>
                <SearchForm handleSearch={this.handleSearch}/>
                <SearchResults />
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
      newsSources: state.user.newsSources
    }
  }
  
export default connect(mapStateToProps,{searchNews}) (SearchContainer);
