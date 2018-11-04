import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getNewsSources } from '../actions/news'
import { updateUserPreferences } from '../actions/user'
import SourceTable from '../components/source_table'

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

export const SubmitButton = styled.button`
    background-color: #3F5941;
    color: white;
    display: block;
    margin: auto;
    font-size: 1.5em;
`;

class Preferences extends Component {

    state = {
        selectedSources: []
    }
                                                                                                            
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateUserPreferences(this.props.userId, {newsSources:this.state.selectedSources});
        this.props.history.push('/');   // Go back to Headlines page
    }

    onChange = (event) => {
        let name = event.target.value;
        let tempSources=this.state.selectedSources;
        // if changed item was already selected, then deselect (remove it)
        let index = tempSources.findIndex( (s)=> s.news_source_id===name);
        if (index >= 0)
            tempSources.splice(index,1);
        // else changed item was just checked so add it to the selected items
        else {
            tempSources.push(this.props.allSources.find((s) => s.news_source_id===name))
        }
        this.setState({selectedSources: tempSources});
    }

    componentDidMount() {
        // if logged in, start action to retrieve available news sources
        if (this.props.isLoggedIn) {     
            if (this.props.allSources.length === 0) {
                this.props.getNewsSources()
            }
            this.setState({selectedSources: this.props.userNewsSources});
        }
    }

    render() {
        // ToDo: should match the user id logged in to the pathname user id?
        //console.log("Preferences Render",this.props.userId,this.props.location.pathname);
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <PreferencesFormSection>
                <h1>Preferences</h1>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <SourceTable onChange={this.onChange} allSources={this.props.allSources} selectedSources={this.state.selectedSources} />
                    <SubmitButton type="submit" >Save</SubmitButton>
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
