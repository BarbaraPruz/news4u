import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getNewsSources } from '../actions/news'
import { updateUserPreferences } from '../actions/user'
import SourceTable from '../components/source_table'

import styled from 'styled-components';

const PreferencesFormSection = styled.div`
  padding: 1em;
  margin: 1em auto 1em auto;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
  height: auto;
  width: 90%;
`;

class Preferences extends Component {

    state = {
        selectedSources: []
    }
                                                                                                            
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
            this.setState({selectedSources: this.props.userNewsSources});
        }
    }    
   render() {
       // console.log("Preferences",this.props);
        // todo: match url to user logged in
        // todo: refactor and separate out into different components
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <PreferencesFormSection>
                <h1>Preferences</h1>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <SourceTable onChange={this.onChange} allSources={this.props.allSources} selectedSources={this.state.selectedSources} />
                    <Button type="submit" >Save</Button>
                </form> 
            </PreferencesFormSection> 
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
