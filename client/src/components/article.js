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

// const HeadlineImage = styled.img`
//     float: left;
//     height: 220px; 
//     margin-top:20px;
//     padding-right: 2em; 
// `;

// const HeadlineText = styled.p`
//     overflow: hidden;
// `;

const Article =  (props) => {
    console.log("Article render",props);
    return (
    <ArticleSection > 
        <h2>{ props.article.title }</h2>
        <h5>Author: {props.article.author}</h5>
        <h5>{props.article.source.name} - {props.article.publishedAt}</h5>
        <p>{ props.article.content }</p>
        <h6><a href={props.article.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
    </ArticleSection>
    )
;
}
export default Article;