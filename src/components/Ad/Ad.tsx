/* IMPORTS */
import React from 'react';
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
`;

function Ad({ css }: { css : string }) {
  return <StyledAd css={css} />;
}

export default Ad;
