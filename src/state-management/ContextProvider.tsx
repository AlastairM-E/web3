import React, { useReducer } from 'react';

import { webMonetizationReducer, toggleMonetizationReducer } from './Reducer';

const Context = React.createContext({});

function ContextProvider({ children }: { children: any }) {
  const [webMonetizationState, dispatchWebMonetizationState] = useReducer(
    webMonetizationReducer,
    { state: null, event: null },
  );

  const [toggleWebMonetization, dispatchToggleMonetization] = useReducer(toggleMonetizationReducer, true);

  return (
    <Context.Provider value={{
      webMonetizationState,
      dispatchWebMonetizationState,
      toggleWebMonetization,
      dispatchToggleMonetization,
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
