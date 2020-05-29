/* eslint-disable react/jsx-curly-brace-presence */
/* IMPORTS */
import React from 'react';
import { articles } from './mockArticles';

// Components
import { ContextProvider } from './state-management/ContextProvider';
import {
  Navbar, Article, WebMonetization, Ad,
} from './components/index';

/* COMPONENT */
function App() {
  /* HOOKS */

  /* RENDER */
  // - Reducer the App background with a data-testid of "App".
  // - Returns a Navbar with the title of Alastair M-E
  return (
    <ContextProvider>
      <WebMonetization />
      <Navbar title="Alastair M-E" />
      <Ad css={`
        grid-column: 1/3;
        grid-row:3/13;
      `}
      >
        AD
      </Ad>
      <Article articles={articles} />
      <Ad css="">AD</Ad>
    </ContextProvider>
  );
}

export default App;
