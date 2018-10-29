import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getNewsSources } from '../actions/news'
import SourceCheckbox from '../components/source_checkbox'

class Preferences extends Component {

    isUserSource(source) {
        let idx = this.props.userNewsSources.findIndex( (s) => s.name===source.name )
        return (idx >= 0) ? true : false;
    }
    renderNewsSources = () => 
        this.props.allSources.map( (source, index) => <SourceCheckbox key={index} val={index} onChange={this.onChange} source={source} checkVal={this.isUserSource(source)} />)

                                                                                                                    
    handleSubmit = (event) => console.log("Form Submitted!");

    onChange = (event) => console.log("On Change",event);

    componentDidMount() {
        //    if logged in, start action to retrieve data for user 
        if (this.props.allSources.length === 0) {
            this.props.getNewsSources()
        }
    }    
   render() {
       // Todo: FormGroup and FormControl needed for checkboxes?
        console.log("Preferences",this.props);
        // todo: match url to user logged in
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="preferences_container">
            <section>
                <h1>Preferences</h1>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    { this.renderNewsSources() }
                    <Button type="submit" >Save</Button>
                </form> 
            </section>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
      userNewsSources: state.user.newsSources,
      allSources: state.news.allSources
    }
  }
  
export default connect(mapStateToProps,{getNewsSources}) (Preferences);
