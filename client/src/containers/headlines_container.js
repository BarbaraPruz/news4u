import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeadlines } from '../actions/news'
import Headline from '../components/headline'
//import FilterForm from '../containers/filter_form.js'

class HeadlinesContainer extends Component {

    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         selectedSources: props.newsSources,
    //     };
    // }

    componentDidMount() {
        //    if logged in, start action to retrieve data for user 
        if (this.props.isLoggedIn) {
            this.props.getHeadlines(this.props.newsSources)
        }
    }

    // onChange = (event) => {
    //     let name = event.target.value;
    //     let tempSources=this.state.selectedSources;
    //     console.log("onchange start",name,tempSources.length,tempSources);
    //     console.log("and allsources",this.props.newsSources.length,this.props.newsSources);         
    //     let index = tempSources.findIndex( (s)=> s.news_source_id===name);
    //     if (index >= 0)
    //         tempSources.splice(index,1);
    //     else {
    //         tempSources.push(this.props.newsSources.find((s) => s.news_source_id===name))
    //     }
    //     this.setState({selectedSources: tempSources});
    //     console.log("onchange end",this.state.selectedSources);
    //     console.log("and allsources",this.props.newsSources);        
    // }

    render() {
    //    console.log("Headlines render",this.props);
        if (!this.props.isLoggedIn)
            return (
                <p>You need to be logged in to use this option</p>
            );               
        return (
            <div className="content-section">
                <h1>Headlines</h1>
                {/* <FilterForm onChange={this.onChange} allSources={this.props.newsSources} selectedSources={this.state.selectedSources} /> */}
                { this.props.headlines.map((hl, id) => <Headline headline={hl} key={id} /> ) }
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
