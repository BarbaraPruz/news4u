import React from 'react'
import styled from 'styled-components';


const HeadlineSection = styled.div`
  padding: 1em;
  margin: 10px auto 10px auto;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
  height: auto;
  width: 90%;
`;

const HeadlineImage = styled.img`
    float: left;
    height: 220px; 
    margin-top:20px;
    padding-right: 2em; 
`;

const HeadlineText = styled.p`
    overflow: hidden;
`;

const Headline =  (props) => 
    <HeadlineSection > 
        { props.headline.urlToImage!=null ? <HeadlineImage src={props.headline.urlToImage} /> : null }        
        <HeadlineText>
            <h3>{props.headline.title}</h3>
            <h5>{props.headline.source.name} at {props.headline.publishedAt}</h5>
            <h5>{props.headline.description}</h5>
            <p>{props.headline.content}</p>
            <h6><a href={props.headline.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
        </HeadlineText>
    </HeadlineSection>
;

export default Headline