/* IMPORTS */
import React from 'react';

import styled from 'styled-components';

/* INTERFACES */
interface NightModeProps {
  NightModeHook: [boolean, any];
}

/* ICONS */
const LightModeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32" id="LightModeIcon">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

const DarkModeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" id="DarkModeIcon">
    <g><rect fill="none" height="48" width="48" /></g>
    <g>
      <g>
        <g><path d="M11.1,12.08C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12c0,0.14,0.02,0.28,0.02,0.42 C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18c0,1.52-0.87,2.83-2.12,3.51 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C18,17.72,13.38,16.52,11.1,12.08z" /></g>
        <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" />
      </g>
    </g>
  </svg>
);

/* STYLES */
const StyledNightModeToggle = styled.span`
  display:flex;
  width: 80px;
  border: ${(props) => props.theme.detailColour} 2.5px solid;
  border-radius:25%;
  padding: 5px;
  svg {
    z-index: 0;
  }
  #LightModeIcon {
    margin-right:auto;
  }
  #DarkModeIcon {
    fill: white;
    background: black;
    margin-left:auto;
  }
`;

const StyledToggleCover = styled.span`
  border: ${(props) => props.theme.backgroundColour} 2.5px solid;
  width: 32px;
  height: 32px;
  border:2.5px;
  position:absolute;
  background:${(props) => props.theme.detailColour};
  margin-left:${(props) => (props.isNightModeOn ? '0px' : '48px')};
  /* margin-right:${(props) => (props.isNightModeOn ? '40px' : '0px')}; */
  z-index:1;
`;

/* COMPONENT */
function NightMode({ NightModeHook }: NightModeProps) {
  const [isNightModeOn, setIsNightModeOn] = NightModeHook;

  /* RENDER */
  return (
    <StyledNightModeToggle>
      <StyledToggleCover
        onClick={() => setIsNightModeOn(!isNightModeOn)}
        isNightModeOn={isNightModeOn}
      />
      {LightModeIcon}
      {DarkModeIcon}
    </StyledNightModeToggle>
  );
}

export default NightMode;
