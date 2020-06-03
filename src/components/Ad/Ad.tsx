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
`;

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

function Ad({ gridColumn, gridRow, children }: { gridColumn : string; gridRow: string; children: any }) {
  const { webMonetizationState, additionalTimeCookieState, dispatchNewAdditionalTimeState } = useContext(Context);
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    if (webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined) {
      setShowAd(true);
    }

    if (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending') {
      setShowAd(false);
    }
  }, [webMonetizationState]);

  useInterval(() => {
    console.log('start of interval', { showAd, additionalTimeCookieState });
    if (additionalTimeCookieState > 0 && !(additionalTimeCookieState < 0) && showAd === true) {
      setShowAd(false);
    }

    if (additionalTimeCookieState > 0 && !(additionalTimeCookieState < 0)) {
      dispatchNewAdditionalTimeState({ action: 'MINUS_A_SECOND_FROM_ADDITIONAL_TIME' });
    }

    if (additionalTimeCookieState <= 0 && additionalTimeCookieState !== null) {
      console.log('inside 3rd condition', 2, { showAd, additionalTimeCookieState });
      setShowAd(true);
    }
    console.log('end of interval', { showAd, additionalTimeCookieState });
  }, 1000);

  return showAd
    ? (<StyledAd gridColumn={gridColumn} gridRow={gridRow}>{ children }</StyledAd>)
    : null;
}

export default Ad;
