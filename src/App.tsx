/* IMPORTS */
import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';

import styled, { keyframes } from 'styled-components';
import { articles } from './mockArticles';

// Components
import { Navbar, Article } from './components/index';

/* ANIMATION */
const changeBackgroundColour = keyframes`
    from {
        background: linear-gradient(red, orange);
    }

    to {
        background: linear-gradient(yellow, lightgreen);
    }
`;

const Ad = styled.span`
    color: #000;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 4em;
    grid-row: 3/13;
    animation: ${changeBackgroundColour} 6s ease-in-out infinite;
`;

const LeftSideAd = styled(Ad)`
  grid-column: 1/3;
`;

const RightSideAd = styled(Ad)`
  grid-column: 11/13;
`;

/* COMPONENT */
function App() {
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <>
      <Helmet>
        <meta name="monetization" content="$ilp.uphold.com/grARjWmwZdDj" />
      </Helmet>
      <Navbar title="Alastair M-E" />
      <LeftSideAd>AD</LeftSideAd>
      <Article articles={articles} />
      <RightSideAd>AD</RightSideAd>
    </>
  );
}

export default App;
