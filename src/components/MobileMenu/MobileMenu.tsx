/* IMPORTS */
import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { SideMenu } from '../index';


/* INTERFACES */
interface mobileMenuProperties {
  SideMenuNav: any;
}

/* STYLES */
const StyledSandwichMenu = styled.span`
    display: none;
    padding: 10px 10px 20px 10px;
    margin: 10px 25px;
    font-size:2.5em;
    letter-spacing:-2px;
    -webkit-transform: rotate(-90deg);
    @media screen and (max-width: 670px) {
        display:inline-block;
        :hover {
            border: 2.5px solid black;
        }
    }
`;

const StyledSideMenu = styled.span`
  display:none;
  @media screen and (max-width: 670px) {
        display:inline-block;
  }
`;
const StyledCloseMenuButton = styled.button``;
const StyledSideMenuNav = styled.nav``;

/* COMPONENT */
function MobileMenu({ SideMenuNav }: mobileMenuProperties) {
  /* HOOKS */
  // Create isSandwichMenuClicked & setIsSandwichMenuClicked useState (initial state will be false).
  const [isSandwichMenuClicked, setIsSandwichMenuClicked] = useState(false);

  /* EVENT LISTENERS */
  // Create a toggleSideMenu function in order for the Side Menu to be toggled off and on.
  const toggleSideMenu = () => setIsSandwichMenuClicked(!isSandwichMenuClicked);

  /* RENDER */
  // Create a SandwichMenu Component that will return a SandwichMenu with a data-testid of
  // "SandwichMenu".
  // If the Sandwich Menu is clicked, reveal the SideMenuNav
  // The SIdeMenu has a button which can close the SideMenu itself.
  // It also has a SideMenuNav which will render the prop SIdeMenuNav
  return (
    <>
      <StyledSandwichMenu data-testid="SandwichMenu" onClick={toggleSideMenu}>|||</StyledSandwichMenu>
      {isSandwichMenuClicked
        ? (
          <StyledSideMenu data-testid="SideMenu">
            <StyledCloseMenuButton onClick={toggleSideMenu} data-testid="CloseMenuButton">X</StyledCloseMenuButton>
            <StyledSideMenuNav data-testid="SideMenuNav">{SideMenuNav}</StyledSideMenuNav>
          </StyledSideMenu>
        ) : null}
    </>
  );
}

export default MobileMenu;
