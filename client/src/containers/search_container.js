import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from 'components/search_form';
import SearchResults from 'containers/search_results';
import { searchNews } from 'actions/news';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchParams) {
        this.props.searchNews(this.props.newsSources,searchParams);
    }

    render() {
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="content-section">
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
