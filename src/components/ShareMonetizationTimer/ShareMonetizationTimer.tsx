/* IMPORTS */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';

import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

const StyledShareMonetizationTimer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  grid-row: 3/6;
  grid-column: 11/13;
  color:black;
  border: 2.5px solid black;
  margin: 7.5px;
  padding:5px 0px;
  font-size: 0.75em;
`;

const StyledTitle = styled.strong`
  font-size: 1.3em;
  margin: 0% 2.5%;
  overflow: auto;
`;

const StyledContent = styled.span`
  margin-top:10%;
  width: 100%;
  overflow: hidden;
`;

const StyledCounter = styled.span`
  font-size: 3.5em;
  color: ${(props) => props.colour};
  text-align: center;
  margin: 1.5px 40%;
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
  const [timeOutIsDone, setTimeOutIsDone] = useState(false);
  const { webMonetizationState, additionalTimeCookieState } = useContext(Context);

  useInterval(() => {
    setTimer(timer + 1000);
    if (
      (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')
      && timeOutIsDone
      && timer >= 5000
    ) {
      fetch('http://localhost:8080/addToCount', { method: 'PUT' });
    }
  }, 1000);

  useEffect(() => {
    if (timeOutIsDone === false) {
      setTimeout(() => {
        setTimeOutIsDone(true);
      }, 1000);
    }
  }, [timeOutIsDone]);

  /* RENDER */
  return timeOutIsDone ? (
    <StyledShareMonetizationTimer id="ShareMonetizationTimer">
      <StyledTitle>Hello world</StyledTitle>
    </StyledShareMonetizationTimer>
  ) : null;
}

export default ShareMonetizationTimer;
