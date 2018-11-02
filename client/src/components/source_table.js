import React, { Component } from 'react';

import SourceTableRow from '../components/source_table_row'
import { StyledTable, StyledTableHeader, StyledTableRow, StyledTableHeaderTD1} from './source_table_style';

 
//   .td1 {
//       margin: 2px;
//       text-align: center;
//   }
  
  

class SourceTable extends Component {

    isUserSource(source) {
        let idx = this.props.selectedSources.findIndex( (s) => s.news_source_id===source.news_source_id )
        return (idx >= 0) ? true : false;
    }

    renderNewsSources = () => 
        this.props.allSources.map( (source, index) => 
            <SourceTableRow key={index} val={source.news_source_id} onChange={this.props.onChange} source={source} checkVal={this.isUserSource(source)} />
        )
                                                                                                             
   render() {
        return (
            <StyledTable>
                <StyledTableRow>
                    <StyledTableHeaderTD1 >&#x2714;</StyledTableHeaderTD1>
                    <StyledTableHeader>Source</StyledTableHeader>
                    <StyledTableHeader>Category</StyledTableHeader>
                    <StyledTableHeader>Description</StyledTableHeader> 
                    <StyledTableHeader>URL</StyledTableHeader>                   
                </StyledTableRow>
                {this.renderNewsSources()}
            </StyledTable>
        )
    }
}
 
export default SourceTable;

