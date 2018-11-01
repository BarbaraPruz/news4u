
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getNewsSources } from '../actions/news'
import { updateUserPreferences } from '../actions/user'
import SourceTable from '../components/source_table'

import styled from 'styled-components';

class FilterForm extends Component {

    isChecked = (source) => {
        let idx = this.props.selectedSources.findIndex( (s) => s.news_source_id===source.news_source_id )
        return (idx >= 0) ? true : false;
    }

    renderSources = () => {

        return (this.props.allSources.map( (source, index) => 
            <label>{source.name}<input type="checkbox" onChange={this.props.onChange} checked={this.isChecked(source)} value={source.news_source_id} /></label>
        ))
    }

    handleSubmit = (event) => console.log("submit filter");
                                                                                                            
   render() { 
       console.log("filter form rener",this.props);          
        return (
            <div className="content-section">
            <div className="inline-form">
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <label>Filter</label>
                    {this.renderSources()}
                    <button type="submit" >Filter</button>
                </form>           
            </div>            
            </div> 
        )
    }
}
 
export default FilterForm;
