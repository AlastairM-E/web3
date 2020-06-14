/* IMPORTS */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

const StyledAd = styled.span`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 4em;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    background: black;
    color:white;
    z-index: 1;
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

function Ad({ gridColumn, gridRow, children }: { gridColumn: string; gridRow: string; children: any }) {
  const { webMonetizationState, additionalTimeState } = useContext(Context);
  const [timeOutIsDone, setTimeOutIsDone] = useState(false);
  const [showAd, setShowAd] = useState(true);

  useInterval(async () => {
    console.log({ additionalTimeState });
    if (timeOutIsDone === false) {
      setTimeOutIsDone(true);
      return null;
    }

    if (additionalTimeState && timeOutIsDone) {
      setShowAd(false);
      return null;
    }

    if (
      (webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined)
      && timeOutIsDone
    ) {
      setShowAd(true);
      return null;
    }


    if (
      (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')
      && timeOutIsDone
    ) {
      setShowAd(false);
      return null;
    }
  }, 1000);

  return timeOutIsDone && showAd
    ? (
      <StyledAd gridColumn={gridColumn} gridRow={gridRow}>
        {children}
      </StyledAd>
    )
    : null;
}

export default Ad;
