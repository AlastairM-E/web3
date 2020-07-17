/* IMPORTS */
import React from 'react';

// Components
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar } from './components/index';

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
  opacity:0;
  &:focus {
    opacity:1;
    background: ${(props) => props.theme.backgroundColour};
    color: ${(props) => props.theme.detailColour};  
    z-index:10;
    grid-column:1/5;
    grid-row:1/2;
    text-decoration: none;
    font-size:1.5em;
    display:flex;
    align-items:center;
    padding-left:15px;
    text-decoration: underline;
  }
`;

/* COMPONENT */
function App() {
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <ThemeProvider theme={theme}>
      <AppBackground />
      <StyledSkipContent href="#main">Skip to Content</StyledSkipContent>
      <Navbar title="Alastair M-E" />
    </ThemeProvider>
  );
}

export default App;
