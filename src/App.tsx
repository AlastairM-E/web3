/* eslint-disable react/jsx-curly-brace-presence */
/* IMPORTS */
import React from 'react';

// Components
import { articles } from './mockArticles';
import { ContextProvider } from './state-management/ContextProvider';
import {
  Navbar, Article, WebMonetization, Ad, ShareMonetizationTimer, DeleteCookieMessage,
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
      <Ad gridColumn={'1/3'} gridRow={'3/13'}>AD1</Ad>
      <Article articles={articles} />
      <Ad gridColumn={'11/13'} gridRow={'3/13'}>AD2</Ad>
      <ShareMonetizationTimer />
      <DeleteCookieMessage />
    </ContextProvider>
  );
}

export default App;
