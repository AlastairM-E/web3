/* IMPORTS */
import React, { useState } from 'react';


// Components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
      <Navbar title="Alastair M-E" NightModeHook={NightModeHook} />
    </ThemeProvider>
  );
}

export default App;
