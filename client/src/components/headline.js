import React, { Component } from 'react';
import styled from 'styled-components';

const HeadlineSection = styled.div`
  padding: 1em;
  margin: 5px auto 5px auto;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
  height: auto;
  width: 90%;
  float: left;
`;

const HeadlineImage = styled.img`
    float: left;
    height: 220px; 
    margin-top:20px;
    padding-right: 2em; 
`;

const HeadlineText = styled.div`
    overflow: hidden;
`;

class Headline extends Component {

    state = {
        likeCount: 0
    }

    handleClick = () => this.setState({likeCount: this.state.likeCount+1});

    render() {
        return ( 
            <HeadlineSection > 
                { this.props.headline.urlToImage!=null ? <HeadlineImage src={this.props.headline.urlToImage} /> : null }        
                <HeadlineText>
                    <h3>{this.props.headline.title}</h3>
                    <h5>{this.props.headline.source.name} at {this.props.headline.publishedAt}</h5>
                    <h5>{this.props.headline.description}</h5>
                    <p>{this.props.headline.content}</p>
                    <h6><a href={this.props.headline.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
                </HeadlineText>
                <button onClick={this.handleClick}>Like</button>
                {this.state.likeCount}
            </HeadlineSection>
        );
    }
}

export default Headline