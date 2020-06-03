/* IMPORTS */
import React, { useContext, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Context } from '../../state-management/ContextProvider';


/* COMPONENT */
function WebMonetization() {
  /* HOOKS */
  const { dispatchWebMonetizationState, toggleWebMonetization } = useContext(Context);

  function monetizationEventHandler(event) {
    dispatchWebMonetizationState({
      action: 'CHANGE_WEB_MONETIZATION_STATUS',
      payload: {
        event,
        state: document.monetization.state,
      },
    });
  }

  useEffect(() => {
    if (document.monetization) {
      document
        .monetization
        .addEventListener('monetizationstart', monetizationEventHandler);

      document
        .monetization
        .addEventListener('monetizationstop', monetizationEventHandler);

      document
        .monetization
        .addEventListener('monetizationprogress', monetizationEventHandler);

      document
        .monetization
        .addEventListener('monetizationpending', monetizationEventHandler);
    }


    return () => {
      if (document.monetization) {
        document
          .monetization
          .removeEventListener('monetizationstart', monetizationEventHandler);

        document
          .monetization
          .removeEventListener('monetizationstop', monetizationEventHandler);

        document
          .monetization
          .removeEventListener('monetizationprogress', monetizationEventHandler);

        document
          .monetization
          .removeEventListener('monetizationpending', monetizationEventHandler);
      }
    };
  }, [document.monetization]);

  /* RENDER */
  return (
    <Helmet>
      { toggleWebMonetization ? (
        <meta
          id="WebMonetization"
          name="monetization"
          content="$ilp.uphold.com/grARjWmwZdDj"
        />
      ) : null }
    </Helmet>
  );
}

export default WebMonetization;
