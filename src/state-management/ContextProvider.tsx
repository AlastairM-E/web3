import React, { useReducer } from 'react';

import { webMonetizationReducer, toggleMonetizationReducer, additionalTimeCookieReducer } from './Reducer';

const Context = React.createContext({});

function ContextProvider({ children }: { children: any }) {
  const [webMonetizationState, dispatchWebMonetizationState] = useReducer(
    webMonetizationReducer,
    { state: null, event: null },
  );

  const [toggleWebMonetization, dispatchToggleMonetization] = useReducer(
    toggleMonetizationReducer,
    true,
  );

  const [additionalTimeState, dispatchNewAdditionalTimeState] = useReducer(
    additionalTimeCookieReducer,
    null,
  );

  return (
    <Context.Provider value={{
      webMonetizationState,
      dispatchWebMonetizationState,
      toggleWebMonetization,
      dispatchToggleMonetization,
      additionalTimeState,
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
