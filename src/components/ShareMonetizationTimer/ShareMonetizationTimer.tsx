/* IMPORTS */
import React, {
  useState, useEffect, useRef, useContext, Fragment,
} from 'react';

import styled from 'styled-components';

import { Context } from '../../state-management/ContextProvider';

const StyledShareMonetizationTimer = styled.div`
  display: flex;
  justify-items: center;
  grid-row: 3/7;
  grid-column: 11/13;
  color:black;
  border: 2.5px solid black;
  margin: 7.5px;
  padding:5px 0px;
  font-size: 0.75em;
  background:white;
`;

const StyledTitle = styled.strong`
  font-size: 1.3em;
  margin: 0.5% 2.5%;
  overflow: auto;
  align-self:flex-start;
  justify-self:center;
`;

const StyledCounter = styled.span`
  font-size: 3.5em;
  color: ${(props) => props.colour};
  align-self: center;
`;

const StyledContent = styled.span`
  margin-top:10%;
  width: 100%;
  overflow: hidden;
  align-self: flex-end;
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
  const { webMonetizationState, dispatchNewAdditionalTimeState, additionalTimeState } = useContext(Context);

  const webMonetizationIsNotOn = webMonetizationState.state === 'stopped'
    || webMonetizationState.state === undefined
    || webMonetizationState.state === null;

  async function checkMinuteTokenIsAvailable() {
    console.log({ webMonetizationIsNotOn }, webMonetizationState.state === 'stopped' || webMonetizationState.state === undefined, webMonetizationState);
    if (webMonetizationIsNotOn) {
      const isMinuteTokenAvailable = await fetch('/isMinuteTokenAvailable', { method: 'PUT' });
      const { showContentForMinute } = await isMinuteTokenAvailable.json();
      await dispatchNewAdditionalTimeState({
        action: 'ADD_ADDITIONAL_TIME',
        additionalTime: showContentForMinute,
      });
    } else {
      dispatchNewAdditionalTimeState({
        action: 'ADD_ADDITIONAL_TIME',
        additionalTime: false,
      });
    }
  }

  useInterval(async () => {
    setTimer(timer + 1000);
    if (
      (webMonetizationState.state === 'started' || webMonetizationState.state === 'pending')
      && timeOutIsDone
      && timer >= 5000
    ) {
      await fetch('/addToCount', { method: 'PUT' });
    }

    if (timeOutIsDone === false) {
      setTimeOutIsDone(true);
      checkMinuteTokenIsAvailable();
    }
  }, 1000);

  useInterval(() => {
    checkMinuteTokenIsAvailable();
  }, 5000);

  const FiveSecondCountdown = () => (timer <= 7000 ? (
    <>
      <StyledCounter colour="red">
        {7 - (timer / 1000)}
        s
      </StyledCounter>
      <StyledContent>Wait till you donate time to other users</StyledContent>
    </>
  ) : null);

  const CounterForAdditionalTimeGivenAway = () => (timer > 7000 ? (
    <>
      <StyledCounter colour="lightgreen">
        {(timer / 1000) - 7}
        s
      </StyledCounter>
      <StyledContent>Amount of time that will be donated to other users</StyledContent>
    </>
  ) : null);

  const CounterShowingTimeLeft = () => (
    webMonetizationIsNotOn && additionalTimeState ? (
      <StyledContent>
        The availability of this web monetized content was donated by other web monetized users.
        Please support web monetization by sign up to coil and getting the free browser extension.
      </StyledContent>
    ) : null);

  /* RENDER */
  return timeOutIsDone ? (
    <StyledShareMonetizationTimer id="ShareMonetizationTimer">
      <StyledTitle>Share Monetization Timer</StyledTitle>
      <CounterShowingTimeLeft />
      {webMonetizationIsNotOn === false
        ? (
          <>
            <FiveSecondCountdown />
            <CounterForAdditionalTimeGivenAway />
          </>
        ) : null}
    </StyledShareMonetizationTimer>
  ) : null;
}

export default ShareMonetizationTimer;
