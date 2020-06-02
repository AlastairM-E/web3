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
  const { webMonetizationState } = useContext(Context);
  const [showAd, setShowAd] = useState(true);
  const [timeTillAdsAreShown, setTimeTillAdsAreShown] = useState(0);

  // useEffect(() => {
  //   if ((webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined) && !document.cookie) {
  //
  //   }

  //   if (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending') {
  //     setShowAd(false);
  //   }
  // }, [webMonetizationState]);

  useInterval(() => {
    if (webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined) {
      setShowAd(true);
      if (document.cookie && timeTillAdsAreShown === 0) {
        setShowAd(false);
        const additionalTime = Number(document.cookie.split('additionalTime=')[1]);
        setTimeTillAdsAreShown(additionalTime);
      }

      if (timeTillAdsAreShown > 0) {
        setShowAd(false);
        setTimeTillAdsAreShown(timeTillAdsAreShown - 1000);
        console.log({ timeTillAdsAreShown });
      }

      if (timeTillAdsAreShown === 0) {
        // setShowAd(true);
        document.cookie = 'additionalTime=0; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        console.log({
          cookie: document.cookie, showAd, timeTillAdsAreShown, isTrue: timeTillAdsAreShown === 0,
        });
      }
    }
  }, 1000);

  return showAd
    ? (<StyledAd gridColumn={gridColumn} gridRow={gridRow}>{ children }</StyledAd>)
    : null;
}

export default Ad;
