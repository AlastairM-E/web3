/* IMPORTS */
import React, { useState, Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  toggleDividerAnimation, toggleSideMenuAnimation,
} from '../../animation';

/* ICONS */
const MobileMenuIcon = (
  <svg height="48" viewBox="0 0 24 24" width="48">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

/* INTERFACES */
interface mobileMenuProperties {
  SideMenuNav: any;
}

/* STYLES */
const StyledSandwichMenu = styled.span`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    border: 2.5px solid white;
    display:inline-block;
    :active {
      border: 2.5px solid black;
    }
`;

const StyledSideMenu = styled.span`
    display:inline-block;
    background: white;
    grid-row: 3/13;
    grid-column: 9/13;
    border-left: 5px solid black;
   ${toggleSideMenuAnimation};
`;
const StyledSideMenuNav = styled.ul`
  * {
    display:inline-block;
    margin: 10px 1000px 10px 10px;
  }
`;

const StyledMenuButtonDivider = styled.span`
    display: flex;
    justify-content: flex-end;
    border-left: 5px solid black;
    border-bottom: 5px solid black;
    grid-column: 9/13;
    grid-row: 1/3;
    align-items:center;
    background: white;
    z-index:1;
    ${toggleDividerAnimation}
`;


/* COMPONENT */
function MobileMenu({ SideMenuNav }: mobileMenuProperties) {
  /* HOOKS */
  // Create isSandwichMenuClicked & setIsSandwichMenuClicked useState (initial state will be false).
  const [isSandwichMenuClicked, setIsSandwichMenuClicked] = useState(false);

  useEffect(() => {
    if (isSandwichMenuClicked === null) {
      setTimeout(() => setIsSandwichMenuClicked(false), 490);
    }
  }, [isSandwichMenuClicked]);
  /* EVENT LISTENERS */
  // Create a toggleSideMenu function in order for the Side Menu to be toggled off and on.
  const toggleSideMenu = () => setIsSandwichMenuClicked(isSandwichMenuClicked === true ? null : true);

  function SideMenu({ isSandwichMenuClickedProps } : { isSandwichMenuClickedProps: boolean }) {
    return isSandwichMenuClicked === true || isSandwichMenuClicked === null
      ? ReactDOM.createPortal(
        <>
          <motion.StyledMenuButtonDivider isSandwichMenuClickedProps={isSandwichMenuClickedProps}>
            <StyledSandwichMenu onClick={toggleSideMenu} data-testid="CloseMenuButton">{MobileMenuIcon}</StyledSandwichMenu>
          </motion.StyledMenuButtonDivider>
          <motion.StyledSideMenu data-testid="SideMenu" isSandwichMenuClickedProps={isSandwichMenuClickedProps}>
            <StyledSideMenuNav data-testid="SideMenuNav">{SideMenuNav}</StyledSideMenuNav>
          </motion.StyledSideMenu>
        </>,
        document.getElementById('root'),
      ) : null;
  }

  /* RENDER */
  // Create a SandwichMenu Component that will return a SandwichMenu with a data-testid of
  // "SandwichMenu".
  // If the Sandwich Menu is clicked, reveal the SideMenuNav
  // The SIdeMenu has a button which can close the SideMenu itself.
  // It also has a SideMenuNav which will render the prop SIdeMenuNav
  return (
    <>
      <StyledSandwichMenu
        data-testid="SandwichMenu"
        onClick={toggleSideMenu}
        isSandwichMenuClicked={isSandwichMenuClicked}
      >
        {MobileMenuIcon}
      </StyledSandwichMenu>
      <SideMenu isSandwichMenuClickedProps={isSandwichMenuClicked} />
    </>
  );
}

export default MobileMenu;
