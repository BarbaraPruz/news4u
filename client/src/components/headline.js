import React from 'react'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const HeadlineSection = styled.div`
  padding: 1em;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
`;

const Headline =  (props) => 
    <HeadlineSection > 
        <h3>{props.headline.title}</h3>
        <h5>{props.headline.pubishedAt}</h5>
        <h5>{props.headline.description}</h5>
        <p>{props.headline.content}</p>
        <h6><a href={props.headline.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
        <h6><a href={props.headline.urlToImage} target="_blank" rel="noopener noreferrer">Image {props.headline.urlToImage}</a></h6>
        <Image src={props.headline.urlToImage} thumbnail />
    </HeadlineSection>
;

export default Headline