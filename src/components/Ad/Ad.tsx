/* IMPORTS */
import React, {
  useContext, useState, useEffect, useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

/* ANIMATION */
const changeBackgroundColour = keyframes`
    from {
        background: linear-gradient(red, orange);
    }

    to {
        background: linear-gradient(yellow, lightgreen);
    }
`;

const StyledAd = styled.span`
    color: #000;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 4em;
    animation: ${changeBackgroundColour} 6s ease-in-out infinite;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    z-index: 1;
`;

const StyledTargetAdMessage = styled.span`
  display: contents;
  font-size: 0.2em;
  text-align: left;
`;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Ad({ gridColumn, gridRow, children }: { gridColumn: string; gridRow: string; children: any }) {
  const {
    webMonetizationState,
    additionalTimeCookieState,
    dispatchNewAdditionalTimeState,
  } = useContext(Context);
  const [targetedAdMessage, setTargetedAdMessage] = useState('');
  const [showAd, setShowAd] = useState(true);

  const [timeOutIsDone, setTimeOutIsDone] = useState(false);

  useEffect(() => {
    document.cookie = 'targetedAd=targetedAdWhichEffectsYourPrivacy; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  }, []);

  useInterval(() => {
    // console.log('start of interval', { showAd, additionalTimeCookieState });
    // console.log('inside 1st condition', 0, { showAd, additionalTimeCookieState });
    // console.log('inside 2nd condition', 1, { showAd, additionalTimeCookieState });
    // console.log('inside 3rd condition', 2, { showAd, additionalTimeCookieState });
    // console.log('end of interval', { showAd, additionalTimeCookieState });
    if (timeOutIsDone === false) {
      setTimeOutIsDone(true);
    }

    if (additionalTimeCookieState > 0 && !(additionalTimeCookieState < 0)) {
      setShowAd(false);
    }

    if (additionalTimeCookieState > 0 && !(additionalTimeCookieState < 0) && children === 'AD1' && timeOutIsDone) {
      dispatchNewAdditionalTimeState({ action: 'MINUS_A_SECOND_FROM_ADDITIONAL_TIME' });
    }

    if (additionalTimeCookieState <= 0 && additionalTimeCookieState !== null) {
      setShowAd(true);
    }

    if ((webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined)) {
      setShowAd(true);
    }

    if (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending') {
      setShowAd(false);
    }
    setTargetedAdMessage(String(getCookie('targetedAd') || 'The target Ad cookie has been deleted'));
  }, 1000);

  return showAd && timeOutIsDone
    ? (
      <StyledAd gridColumn={gridColumn} gridRow={gridRow}>
        {children}
        <br />
        <br />
        <StyledTargetAdMessage>
          <br />
          <br />
          {targetedAdMessage}
        </StyledTargetAdMessage>
      </StyledAd>
    )
    : null;
}

export default Ad;
