/* IMPORTS */
import React from 'react';

// Components
import styled from 'styled-components';
import { Navbar } from './components/index';

// Global styles from App.scss and styled from styledComponents

/* App Background styles: */
// - Provides a 12 column and row grid layout with a 10px grid gap that spans all of the page.
// - It is encased in a div.
const AppBackground = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 10px;
  height: 100%;
  width: 100%;
`;

/* COMPONENT */
function App() {
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <AppBackground className="App" data-testid="App">
      <Navbar title="Alastair M-E" />
    </AppBackground>
  );
}

export default App;
