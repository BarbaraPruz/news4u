import React from 'react'
import styled from 'styled-components';

const ArticleSection = styled.div`
  padding: 1em;
  margin: 10px auto 10px auto;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
  height: auto;
  width: 90%;
`;

const Article =  (props) => 
    <ArticleSection > 
        <h2>{ props.article.title }</h2>
        <h5>Author: {props.article.author}</h5>
        <h5>{props.article.source.name} - {props.article.publishedAt}</h5>
        <p>{ props.article.content }</p>
        <h6><a href={props.article.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
    </ArticleSection>
;

export default Article;