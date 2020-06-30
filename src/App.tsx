/* IMPORTS */
import React, { useState } from 'react';


// Components
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar } from './components/index';

const theme = {
  backgroundColour: 'white',
  detailColour: 'black',
};

function inverted({ backgroundColour, detailColour }) {
  return ({
    backgroundColour: detailColour,
    detailColour: backgroundColour,
  });
}

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
    grid-column:1/13;
    grid-row:1/2;
    text-decoration: none;
    font-size:1.5em;
    border-bottom: 2.5px solid ${(props) => props.theme.backgroundColour};
      :hover {
        border-bottom: 2.5px solid ${(props) => props.theme.backgroundColour};
      }
  }
`;

const StyledMain = styled.a`
  grid-column:1/13;
  grid-row:4/13;
`;

/* COMPONENT */
function App() {
  const NightModeHook = useState(false);
  const [isNightModeOn] = NightModeHook;
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <ThemeProvider theme={isNightModeOn ? inverted(theme) : theme}>
      <AppBackground />
      <StyledSkipContent href="#main">Skip to Content</StyledSkipContent>
      <Navbar title="Alastair M-E" NightModeHook={NightModeHook} />
      <StyledMain id="main" href="#">
        This is content
        <p><a href="#">Link to new part of the site</a></p>
      </StyledMain>

    </ThemeProvider>
  );
}

export default App;
