import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeadlines } from '../actions/news'
import Headline from '../components/headline'
import FilterForm from '../components/filter_form'

class HeadlinesContainer extends Component {

    constructor (props) {
        super(props);
        // the container just needs to keep track of the source names
        // occasionally, the newsSource won't have a name and so use the id stir
        let sourceNames = props.newsSources.map ( (s) => s.name || s.news_source_id);
        this.state = {
            selectedSources: sourceNames,
            allSources: sourceNames.slice(0) //clone  
        };

        this.renderHeadlines = this.renderHeadlines.bind(this);
        this.filterHeadlines = this.filterHeadlines.bind(this);        
    }

    filterHeadlines() {  // filter out any headlines not from one of the selected sources
        return this.props.headlines.filter( (hl) => this.state.selectedSources.includes(hl.source.name))
    }

    renderHeadlines() {
        return this.filterHeadlines().map((hl, id) => <Headline headline={hl} key={id} /> ) 
    }
    
    componentDidMount() {
        //    if logged in, start action to retrieve data for user 
        if (this.props.isLoggedIn) {
            this.props.getHeadlines(this.props.newsSources)
        }
    }

    onChange = (event) => {
        let name = event.target.value;
        let tempSources=this.state.selectedSources;
        let index = tempSources.indexOf(name);
        if (index >= 0) // uncheck it
             tempSources.splice(index,1);
        else 
        // Todo - make sure name is in all sources?
             tempSources.push(name)
        this.setState({selectedSources: tempSources});  
    }

    render() {
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );              
        return (
            <div className="content-section">
                <h1>Headlines</h1>
                <FilterForm onChange={this.onChange} allSources={this.state.allSources} selectedSources={this.state.selectedSources} />                
                {this.renderHeadlines()}
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
      newsSources: state.user.newsSources,
      headlines: state.news.headlines
    }
  }
  
export default connect(mapStateToProps,{getHeadlines}) (HeadlinesContainer);
