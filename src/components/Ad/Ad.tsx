/* IMPORTS */
import React, {
  useState, useEffect, useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';

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
  const [timeOutIsDone, setTimeOutIsDone] = useState(false);

  useInterval(() => {
    if (timeOutIsDone === false) {
      setTimeOutIsDone(true);
    }
  }, 1000);

  return timeOutIsDone
    ? (
      <StyledAd gridColumn={gridColumn} gridRow={gridRow}>
        {children}
      </StyledAd>
    )
    : null;
}

export default Ad;
