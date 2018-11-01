import React, { Component } from 'react';
import styled from 'styled-components';

export const InlineForm = styled.div`
    display: block;
    text-align: center;
    border: 1px solid #5d5856;
    border-radius: 5px;
    width: 60%;
    margin: auto;
`;
  
export const InlineLabel = styled.label`
    margin: 5px 10px 5px 10px;
`;
  
export const InlineInput = styled.input`
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 50%;
`;
  
export const InlineButton = styled.button`
    padding-left: 10px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
`;

class SearchForm extends Component {

    state = {
        topic: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearch(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <InlineForm>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <InlineLabel>Topic</InlineLabel>
                    <InlineInput type="text" name="topic" onChange={ event => this.handleChange(event) } placeholder="Search Topic" />               
                    <InlineButton type="submit" >Search</InlineButton>
                </form>           
            </InlineForm>
        );
    }
}

export default SearchForm;