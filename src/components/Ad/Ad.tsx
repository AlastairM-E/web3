/* IMPORTS */
import React, { useContext } from 'react';
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
`;

function Ad({ css }: { css : string }) {
  const { webMonetizationState } = useContext(Context);
  return webMonetizationState.state === 'started' ? null : <StyledAd css={css} />;
}

export default Ad;
