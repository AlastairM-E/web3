/* IMPORTS */
import React, { Fragment } from 'react';

import { articles } from './mockArticles';

// Components
import { Navbar, Article } from './components/index';

/* COMPONENT */
function App() {
  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <>
      <Navbar title="Alastair M-E" />
      <Article articles={articles} />
    </>
  );
}

export default App;
