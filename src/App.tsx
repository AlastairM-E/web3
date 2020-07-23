/* IMPORTS */
import React from 'react';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar, Intro } from './components/index';

/* STYLES */
const theme = {
  backgroundColour: 'white',
  detailColour: 'black',
};

const AppBackground = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColour};
    color: ${(props) => props.theme.detailColour};
  }
`;

const StyledSkipContent = styled.a`
  grid-column:0/0;
  grid-row:0/0;

  position:absolute;

  opacity:0;

  &:focus {
    grid-column:1/5;
    grid-row:1/1;
    height:75px;

    position:initial;

    display:flex;
    align-items:center;

    padding-left:15px;
    
    background: ${(props) => props.theme.backgroundColour};
    opacity:1;
    
    color: ${(props) => props.theme.detailColour}; 
    font-size:1.5em;
    text-decoration: underline;

    z-index:10;
  }
`;

const StyledScrollBody = styled.div`
  grid-column: 1/13;
  grid-row:2/6;

  display:flex;

  justify-content: center;
  text-align:center;
`;

/* COMPONENT */
function App() {
  /* RENDER */

  return (
    <ThemeProvider theme={theme}>
      <AppBackground />
      <StyledSkipContent href="#main">Skip to Content</StyledSkipContent>
      <Navbar title="Alastair M-E" />
      <StyledScrollBody>
        <Intro />
      </StyledScrollBody>
    </ThemeProvider>
  );
}

export default App;
