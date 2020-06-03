import React, { useReducer } from 'react';

import { webMonetizationReducer, toggleMonetizationReducer, additionalTimeCookieReducer } from './Reducer';

const Context = React.createContext({});

function initialCookieReading(initialState: void): void | number {
  if (document.cookie) {
    const initialCookieValue = additionalTimeCookieReducer(
      initialState,
      { action: 'ADD_COOKIE_ADDITIONAL_TIME', cookie: document.cookie },
    );
    document.cookie = 'additionalTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    return initialCookieValue;
  }

  return initialState;
}

function ContextProvider({ children }: { children: any }) {
  const [webMonetizationState, dispatchWebMonetizationState] = useReducer(
    webMonetizationReducer,
    { state: null, event: null },
  );

  const [toggleWebMonetization, dispatchToggleMonetization] = useReducer(
    toggleMonetizationReducer,
    true,
  );

  const [additionalTimeCookieState, dispatchNewAdditionalTimeState] = useReducer(
    additionalTimeCookieReducer,
    null,
    initialCookieReading,
  );

  return (
    <Context.Provider value={{
      webMonetizationState,
      dispatchWebMonetizationState,
      toggleWebMonetization,
      dispatchToggleMonetization,
      additionalTimeCookieState,
      dispatchNewAdditionalTimeState,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export {
  Context,
  ContextProvider,
};
