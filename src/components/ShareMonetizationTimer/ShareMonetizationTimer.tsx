/* IMPORTS */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';

import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

const StyledShareMonetizationTimer = styled.div`
    grid-row: 11/12;
    grid-column: 6/7;
    color:black;
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

/* COMPONENT */
function ShareMonetizationTimer() {
  /* HOOKS */
  const [timer, setTimer] = useState(0);
  const { webMonetizationState } = useContext(Context);

  useInterval(() => {
    if (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending') {
      setTimer(timer + 1000);
    }
  }, 1000);

  useEffect(() => {
    if (timer >= 5000) {
      document.cookie = `additionalTime=${(timer - 5000)};`;
    }
  });

  /* RENDER */
  return (
    <StyledShareMonetizationTimer id="ShareMonetizationTimer">
      ShareMonetizationTimer:
      {timer}
    </StyledShareMonetizationTimer>
  );
}

export default ShareMonetizationTimer;
