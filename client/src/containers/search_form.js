import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import './search_form.css';

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
            <div className="inline-form">
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <label>Topic</label>
                    <input type="text" name="topic" onChange={ event => this.handleChange(event) } placeholder="Search Topic" />               
                    <button type="submit" >Search</button>
                </form>           
            </div>
        );
    }
}

export default SearchForm;