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
    if ((webMonetizationState.state === 'started' || webMonetizationState.state === 'pending') && timeOutIsDone) {
      setTimer(timer + 1000);
    }
  }, 1000);

  useEffect(() => {
    if (timeOutIsDone === false) {
      setTimeout(() => {
        setTimeOutIsDone(true);
      }, 1000);
    }

    if (timer > 5000 && (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')) {
      document.cookie = `additionalTime=${(timer - 5000)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
  }, [timer, timeOutIsDone]);

  /* RENDER */
  return timeOutIsDone ? (
    <StyledShareMonetizationTimer id="ShareMonetizationTimer">
      <span>
        {(() => {
          if (additionalTimeCookieState < 0) {
            return null;
          }

          if (additionalTimeCookieState > 0 && !(additionalTimeCookieState < 0)) {
            return (
              <span>
                <StyledTitle>
                  Share Monetization Timer
                  <br />
                </StyledTitle>
                <StyledContent>
                  You have this time left :
                  <br />
                </StyledContent>
                {' '}
                <StyledCounter colour="green">
                  {(additionalTimeCookieState / 1000)}
                  s
                </StyledCounter>
                <br />
                <StyledContent>till you back to ads</StyledContent>
              </span>
            );
          }
          if (timer < 5000) {
            return (
              <span>
                {' '}
                <StyledTitle>
                  Share Monetization Timer
                  <br />
                </StyledTitle>
                <StyledContent>
                  you have
                  <br />
                </StyledContent>
                {' '}
                <StyledCounter colour="darkred">
                  {5 - (timer / 1000)}
                  s
                </StyledCounter>
                <br />
                <StyledContent>to go before you will get your web monetization back</StyledContent>
              </span>
            );
          }

          if ((webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')) {
            return (
              <span>
                <StyledTitle>
                  Share Monetization Timer
                  <br />
                </StyledTitle>
                <StyledContent>
                  You have this much additional time :
                  <br />
                </StyledContent>
                {' '}
                <StyledCounter colour="green">
                  {(timer / 1000) - 5}
                  s
                </StyledCounter>
                <br />
                <StyledContent>which your next visit will be both web & ad monetization free</StyledContent>
              </span>
            );
          }
        })()}
      </span>
    </StyledShareMonetizationTimer>
  ) : null;
}

export default ShareMonetizationTimer;
