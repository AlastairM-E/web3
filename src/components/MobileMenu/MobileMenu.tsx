/* IMPORTS */
import React, { useState, Fragment } from 'react';

import styled from 'styled-components';

/* INTERFACES */
interface childrenProperty {
  children: string
}

/* STYLES */
const StyledMobileMenu = styled.span`
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

const StyledSideMenu = styled.span``;
const StyledCloseSideMenuButton = styled.button``;

/* COMPONENT */
function MobileMenu({ children }: childrenProperty) {
  // Create isMobileMenuClicked & setIsMobileMenuClicked useState (initial state will be false).
  // Create a toggleSideMenu function is order so that the Side Menu can be toggled off and on.
  // Create a SideMenu Component that will return a SideMenu with a data-testid of "SideMenu".
  // Inside that component is a CloseSideMenuButton, with an event listener which will trigger
  // the toggleSideMenu Function.
  // The function will render a wrapper Fragment component,in whcih
  // the StyledMobileMenu component which renders the children prop.
  // The StyledMobileMenu will have an onclick event handler which when clicked will toggle
  // the SideMenu.
  // This occurs becuase the SideMenu component is conditionally rendered
  // based on whether the  isMobileMenuClicked state is true (by default is is false).
  // This means that if the Menu Button is click it will open the sideMenu tab and
  // (currently) the SideMenu and the MobileMenu button will then be able to close
  // the side menu.
  /* HOOKS */
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);

  /* EVENT LISTENERS */
  const toggleSideMenu = () => setIsMobileMenuClicked(!isMobileMenuClicked);

  /* ADDItIONAL COMPONENTS */
  function SideMenu() {
    return (
      <StyledSideMenu data-testid="SideMenu">
        <StyledCloseSideMenuButton
          onClick={toggleSideMenu}
          data-testid="CloseSideMenuButton"
        >
          X
        </StyledCloseSideMenuButton>
      </StyledSideMenu>
    );
  }

  /* RENDER */
  return (
    <>
      <StyledMobileMenu
        data-testid="MobileMenu"
        onClick={toggleSideMenu}
      >
        {children}
      </StyledMobileMenu>
      {isMobileMenuClicked ? <SideMenu /> : null}
    </>
  );
}

export default MobileMenu;
