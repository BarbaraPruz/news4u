import React, { Component } from 'react';
import SourceCheckbox from '../components/source_checkbox'

import styled from 'styled-components';

const InputTable = styled.table`
  color:#595959;
`;

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
            <InputTable>
                {this.renderNewsSources()}
            </InputTable>
        )
    }
}
 
export default SourceTable;

