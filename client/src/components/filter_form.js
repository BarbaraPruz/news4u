
import React, { Component } from 'react';
import styled from 'styled-components';

const InLineForm = styled.form`
  padding: 1em;
  margin: 10px auto 10px auto;
  border: 1px solid #3F5941;
  border-radius: 5px;      
  height: auto;
  width: 100%;
`;

const TitleLabel = styled.label`
    font-size: 1.5em;
    margin-right: 20px;
`;

const InlineLabel = styled.label`
    margin-right: 20px;
`;

class FilterForm extends Component {

    isChecked = (source) => {
        return this.props.selectedSources.includes(source)
    }

    renderSources = () => {
        return (this.props.allSources.map( (source, index) => 
            <InlineLabel key={source}>{source}<input type="checkbox" onChange={this.props.onChange} checked={this.isChecked(source)} value={source} /></InlineLabel>
        ))
    }
                                                                                                           
   render() {         
        return (
            <div>
                <InLineForm >
                        <TitleLabel>News Sources:</TitleLabel>
                        {this.renderSources()}
                </InLineForm>                     
            </div> 
        )
    }
}
 
export default FilterForm;
