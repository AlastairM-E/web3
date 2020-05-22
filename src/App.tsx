/* IMPORTS */
import React from 'react';

// Components
import { Navbar } from './components/index';

/* COMPONENT */
function App() {
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <Navbar title="Alastair M-E" />
  );
}

export default App;
