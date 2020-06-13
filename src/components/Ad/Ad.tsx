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
  const { webMonetizationState } = useContext(Context);
  const [timeOutIsDone, setTimeOutIsDone] = useState(false);
  const [showAd, setShowAd] = useState(true);

  useInterval(async () => {
    if (timeOutIsDone === false) {
      setTimeOutIsDone(true);
      await fetch('/isMinuteTokenAvailable', { method: 'PUT' });
    }
    const countJson = await fetch('./count.json');
    const { showContentForMinute } = await countJson.json();
    if (showContentForMinute) setShowAd(false);
  }, 1000);

  // useInterval(async () => {
  //   if (webMonetizationState.state === null || webMonetizationState.state === undefined) {
  //     await fetch('/isMinuteTokenAvailable', { method: 'PUT' });
  //     const countJsonData = await JSON.parse(
  //       await fetch('./count.json'),
  //     );
  //     console.log({ countJsonData });
  //   }
  // }, 60000);

  return timeOutIsDone && showAd
    ? (
      <StyledAd gridColumn={gridColumn} gridRow={gridRow}>
        {children}
      </StyledAd>
    )
    : null;
}

export default Ad;
