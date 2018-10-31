import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
            <div className="content-section">
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <FormGroup>
                        <ControlLabel>Topic</ControlLabel>
                        <FormControl type="Test" name="topic" onChange={ event => this.handleChange(event) } placeholder="Search Topic" />
                    </FormGroup>{' '}                
                    <Button type="submit" >Search</Button>
                </form>           
            </div>
        );
    }
}

export default SearchForm;