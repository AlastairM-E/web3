/* IMPORTS */
import React, { useState, Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  transition,
  sandwichMenuDividerVarients,
  sideMenuVariants,
} from '../../animation';

/* ICONS */
const MobileMenuIcon = (
  <svg height="48" viewBox="0 0 24 24" width="48">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const detailColour = (props) => props.theme.detailColour;
const backgroundColour = (props) => props.theme.backgroundColour;

/* INTERFACES */
interface mobileMenuProperties {
  SideMenuNav: any;
}

/* STYLES */
const StyledSideMenuDarkenBackground = styled.div`
  background: rgba(0,0,0,0.5);
  grid-column: 1/13;
  grid-row:1/13;
  transition:2s;
`;

const StyledSandwichMenu = styled.span`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    border: 2.5px solid ${(props) => backgroundColour(props)};
    display:inline-block;
    :active {
      border: 2.5px solid ${(props) => detailColour(props)};
    }
`;

const StyledSideMenu = styled(motion.span)`
    display:inline-block;
    background: ${(props) => backgroundColour(props)};
    grid-row: 3/13;
    grid-column: 9/13;
    border-left: 5px solid ${(props) => detailColour(props)};
    z-index: 1;
`;
const StyledSideMenuNav = styled.ul`
  * {
    display:inline-block;
    margin: 10px 1000px 10px 10px;
  }
`;

const StyledSandwichMenuDivider = styled(motion.span)`
    display: flex;
    justify-content: flex-end;
    align-items:center;
    border-left: 5px solid ${(props) => detailColour(props)};
    border-bottom: 5px solid ${(props) => detailColour(props)};
    grid-column: 9/13;
    grid-row: 1/3;
    background: ${(props) => backgroundColour(props)};
    z-index:2;

    svg {
      fill: ${(props) => detailColour(props)};
    }
`;


/* COMPONENT */
function MobileMenu({ SideMenuNav }: mobileMenuProperties) {
  /* HOOKS */
  // Create isSandwichMenuClicked & setIsSandwichMenuClicked useState (initial state will be false).
  const [isSandwichMenuClicked, setIsSandwichMenuClicked] = useState(false);
  const [isScreenWiderThan975px, setIsScreenWiderThan975px] = useState(true);

  useEffect(() => {
    if (isSandwichMenuClicked === null) {
      setTimeout(() => {
        setIsSandwichMenuClicked(false);
      }, 300);
    }

    if (window.innerWidth > 975) {
      setIsScreenWiderThan975px(true);
    } else {
      setIsScreenWiderThan975px(false);
    }
  }, [isSandwichMenuClicked, window.innerWidth]);
  /* EVENT LISTENERS */
  // Create a toggleSideMenu function in order for the Side Menu to be toggled off and on.
  const toggleSideMenu = () => setIsSandwichMenuClicked(isSandwichMenuClicked === true ? null : true);

  function SideMenu() {
    return isSandwichMenuClicked === true || isSandwichMenuClicked === null
      ? ReactDOM.createPortal(
        <>
          { isScreenWiderThan975px ? <StyledSideMenuDarkenBackground id="SideMenuDarkenBackground" /> : null }
          <StyledSandwichMenuDivider
            initial={isSandwichMenuClicked ? 'InitDividerIn' : 'InitDividerOut'}
            animate={isSandwichMenuClicked ? 'slideDividerIn' : 'slideDividerOut'}
            transition={transition}
            variants={sandwichMenuDividerVarients(isScreenWiderThan975px)}
          >
            <StyledSandwichMenu onClick={toggleSideMenu} id="CloseMenuButton">{MobileMenuIcon}</StyledSandwichMenu>
          </StyledSandwichMenuDivider>
          <StyledSideMenu
            initial={isSandwichMenuClicked ? 'InitSideMenuIn' : 'InitSideMenuOut'}
            animate={isSandwichMenuClicked ? 'slideSideMenuIn' : 'slideSideMenuOut'}
            transition={transition}
            variants={sideMenuVariants(isScreenWiderThan975px)}
            id="SideMenu"
          >
            <StyledSideMenuNav id="SideMenuNav">{SideMenuNav}</StyledSideMenuNav>
          </StyledSideMenu>
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
        id="SandwichMenu"
        onClick={toggleSideMenu}
        isSandwichMenuClicked={isSandwichMenuClicked}
      >
        {MobileMenuIcon}
      </StyledSandwichMenu>
      <SideMenu />
    </>
  );
}

export default MobileMenu;
