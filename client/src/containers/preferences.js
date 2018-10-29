import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getNewsSources } from '../actions/news'
import { updateUserPreferences } from '../actions/user'
import SourceCheckbox from '../components/source_checkbox'

class Preferences extends Component {

    state = {
        selectedSources: []
    }

    isUserSource(source) {
        let idx = this.state.selectedSources.findIndex( (s) => s.news_source_id===source.news_source_id )
        return (idx >= 0) ? true : false;
    }

    renderNewsSources = () => 
        this.props.allSources.map( (source, index) => 
            <SourceCheckbox key={index} val={source.news_source_id} onChange={this.onChange} source={source} checkVal={this.isUserSource(source)} />
        )
                                                                                                             
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted!",this.state.selectedSources);
        this.props.updateUserPreferences(this.props.userId, {newsSources:this.state.selectedSources});
        this.props.history.push('/');
    }

    onChange = (event) => {
        let name = event.target.value;
        let tempSources=this.state.selectedSources;
        let index = tempSources.findIndex( (s)=> s.news_source_id===name);
        if (index >= 0)
            tempSources.splice(index,1);
        else {
            tempSources.push(this.props.allSources.find((s) => s.news_source_id===name))
        }
        this.setState({selectedSources: tempSources});
        console.log("Updated Sources", this.state.selectedSources);
    }

    componentDidMount() {
        //    if logged in, start action to retrieve data for user
        if (this.props.isLoggedIn) {
            console.log("Preferences did mount");       
            if (this.props.allSources.length === 0) {
                this.props.getNewsSources()
            }
            console.log("Preferences did mount-setting selected sources=",this.props.userNewsSources);
            this.setState({selectedSources: this.props.userNewsSources});
        }
    }    
   render() {
       // Todo: FormGroup and FormControl needed for checkboxes?
       // console.log("Preferences",this.props);
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
      userId: state.user.id,
      isLoggedIn: state.user.isLoggedIn,
      userNewsSources: state.user.newsSources,
      allSources: state.news.allSources
    }
  }
  
export default connect(mapStateToProps,{getNewsSources,updateUserPreferences}) (Preferences);
