/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';


/* INTERFACES */
interface Articles {
  articles : {
    title: string;
    content: string;
  }[]
}

/* STYLES */
const StyledArticleContainer = styled.article`
    grid-column: 3/11;
    grid-row: 3/13;
    border-right: 5px solid black;
    border-left:5px solid black;
    color:black;
`;

const StyledArticle = styled.article``;

const StyledShiftArticleButton = styled.button``;

/* COMPONENT */
function Article({ articles }: Articles) {
  /* HOOKS */
  const [index, setIndex] = useState(0);
  function ShiftArticleForwardsButton() {
    return index !== articles.length - 1 ? (
      <StyledShiftArticleButton id="ShiftArticleForwardsButton" onClick={() => setIndex(index + 1)}>
        {'-->'}
      </StyledShiftArticleButton>
    ) : null;
  }

  function ShiftArticleBackwardsButton() {
    return index !== 0 ? (
      <StyledShiftArticleButton id="ShiftArticleBackwardsButton" onClick={() => setIndex(index - 1)}>
        {'<--'}
      </StyledShiftArticleButton>
    ) : null;
  }

  const { title, content } = articles[index];
  return (
    <StyledArticleContainer id="ArticleContainer">
      <StyledArticle id="Article">
        <h1 id="ArticleTitle">{title}</h1>
        <span id="ArticleContent">{content}</span>
      </StyledArticle>
      <ShiftArticleBackwardsButton />
      <span id="ArticleCounter">{`${index + 1}/${articles.length}`}</span>
      <ShiftArticleForwardsButton />
    </StyledArticleContainer>
  );
}

export default Article;
