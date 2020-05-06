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

/* STYLES */
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
  // Create isSandwichMenuClicked & setIsSandwichMenuClicked useState (initial state will be false).
  // Create a toggleSideMenu function is order so that the Side Menu can be toggled off and on.
  // Create a SideMenu Component that will return a SideMenu with a data-testid of "SideMenu".
  // Inside that component is a CloseSideMenuButton, with an event listener which will trigger
  // the toggleSideMenu Function.
  // The function will render a wrapper Fragment component,in whcih
  // the StyledSandwichMenu component which renders the children prop.
  // The StyledSandwichMenu will have an onclick event handler which when clicked will toggle
  // the SideMenu.
  // This occurs becuase the SideMenu component is conditionally rendered
  // based on whether the  isSandwichMenuClicked state is true (by default is is false).
  // This means that if the Menu Button is click it will open the sideMenu tab and
  // (currently) the SideMenu and the MobileMenu button will then be able to close
  // the side menu.
  /* HOOKS */
  const [isSandwichMenuClicked, setIsSandwichMenuClicked] = useState(false);

  /* EVENT LISTENERS */
  const toggleSideMenu = () => setIsSandwichMenuClicked(!isSandwichMenuClicked);

  /* RENDER */
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
