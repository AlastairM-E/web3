/* IMPORTS */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';

import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

const StyledShareMonetizationTimer = styled.div`
    grid-row: 4/5;
    grid-column: 11/13;
    color:black;
    border: 2.5px solid black;
    margin: 7.5px;
    padding:5px 0px;
    font-size: 0.8em;
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
      document.cookie = `additionalTime=${(timer - 5000)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
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
