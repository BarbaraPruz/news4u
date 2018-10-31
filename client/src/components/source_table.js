import React, { Component } from 'react';
import SourceCheckbox from '../components/source_checkbox'

import './source_table.css'


class SourceTable extends Component {

    isUserSource(source) {
        let idx = this.props.selectedSources.findIndex( (s) => s.news_source_id===source.news_source_id )
        return (idx >= 0) ? true : false;
    }

    renderNewsSources = () => 
        this.props.allSources.map( (source, index) => 
            <SourceCheckbox key={index} val={source.news_source_id} onChange={this.props.onChange} source={source} checkVal={this.isUserSource(source)} />
        )
                                                                                                             
   render() {
        return (
            <table>
                <tr>
                    <th class="td1">&#x2714;</th>
                    <th>Source</th>
                    <th>Category</th>
                    <th>Description</th> 
                    <th>URL</th>                   
                </tr>
                {this.renderNewsSources()}
            </table>
        )
    }
}
 
export default SourceTable;

