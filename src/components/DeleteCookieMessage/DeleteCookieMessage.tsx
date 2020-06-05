/* IMPORTS */
import React, { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

/* STYLES */
const StyledDeleteCookieMessage = styled.span`
    display: flex;
    align-items: center;
    justify-items: center;
    grid-column: 11/13;
    grid-row: 6/8;
    color:black;
    border: 2.5px solid black;
    margin: 7.5px;
    padding:5px 0px;
    font-size: 0.75em;
`;


/* HELPER FUNCTION */
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

/* COMPONENT */
function DeleteCookieMessage() {
  const [deleteCookieMessage, setDeleteCookieMessage] = useState(null);
  const [timeOutIsDone, setTimeOutIsDone] = useState(false);
  const { webMonetizationState } = useContext(Context);

  useEffect(() => {
    console.log({ cookieName: getCookie('targetedAd') });
    if (timeOutIsDone === false) {
      setTimeout(() => {
        setTimeOutIsDone(true);
      }, 1000);
    }
    if (
      (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')
            && timeOutIsDone
            && deleteCookieMessage === null
    ) {
      document.cookie = 'targetedAd=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setDeleteCookieMessage(true);
    }
  }, [timeOutIsDone, deleteCookieMessage]);


  /* RENDER */
  return deleteCookieMessage === true && timeOutIsDone ? (
    <StyledDeleteCookieMessage>
      <button onClick={() => setDeleteCookieMessage(false)}>X</button>
      Thank you for using Web Monetization.
      <br />
      As a small token of our appreication, we have deleted the target ads cookies for our website which invade your privacy.
      Enjoy!
    </StyledDeleteCookieMessage>
  ) : null;
}

export default DeleteCookieMessage;
