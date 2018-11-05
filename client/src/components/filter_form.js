
import React, { Component } from 'react';
import styled from 'styled-components';

class FilterForm extends Component {

    isChecked = (source) => {
        return this.props.selectedSources.includes(source)
    }

    renderSources = () => {
        return (this.props.allSources.map( (source, index) => 
            <label>{source}<input type="checkbox" onChange={this.props.onChange} checked={this.isChecked(source)} value={source} /></label>
        ))
    }
                                                                                                           
   render() {         
        return (
            <div className="content-section">
                <div className="inline-form">
                    <form >
                        <label>Filter</label>
                        {this.renderSources()}
                    </form>           
                </div>            
            </div> 
        )
    }
}
 
export default FilterForm;
