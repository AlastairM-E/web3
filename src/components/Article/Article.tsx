/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';

/* INTERFACES */
interface Articles {
    articles: string[];
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
  /* RENDER */
  return (
    <StyledArticleContainer data-testid="ArticleContainer">
      <StyledArticle data-testid="Article">{articles[index]}</StyledArticle>
      <StyledShiftArticleButton data-testid="ShiftArticleBackwardsButton" onClick={() => setIndex(index - 1)}>
        {'<--'}
      </StyledShiftArticleButton>
      <StyledShiftArticleButton data-testid="ShiftArticleForwardsButton" onClick={() => setIndex(index + 1)}>
        {'-->'}
      </StyledShiftArticleButton>
    </StyledArticleContainer>
  );
}

export default Article;
