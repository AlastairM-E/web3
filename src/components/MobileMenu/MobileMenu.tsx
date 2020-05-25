/* IMPORTS */
import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import {
  slideSideMenu, toggleSandwichMenuAnimation, slideMenuButtonDividerIn, smbdaX,
} from '../../animation';

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
    cursor: pointer;
    letter-spacing:-2px;
    -webkit-transform: rotate(-90deg);
    border: 2.5px solid lightgreen;
    @media screen and (max-width: 670px) {
        display: ${toggleSandwichMenuAnimation};
        :hover {
            border: 2.5px solid black;
        }
    }
`;

const StyledSideMenu = styled.span`
  display:none;
  @media screen and (max-width: 670px) {
    display:inline-block;
    background: white;
    grid-row: 3/13;
    grid-column: 9/13;
    border-left: 5px solid black;
    animation:${slideSideMenu} 0.5s ease-in;
  }
`;
const StyledSideMenuNav = styled.ul`
  * {
    display:inline-block;
    margin: 10px 100px 10px 10px;
  }
`;

const StyledMenuButtonDivider = styled.span`
  display: none;
  @media screen and (max-width: 670px) {
    display: flex;
    justify-content: flex-end;
    border-left: 5px solid black;
    border-bottom: 5px solid black;
    grid-column: 9/13;
    grid-row: 1/3;
    background: white;
    /* animation: ${slideMenuButtonDividerIn} 0.5s ease-in; */
    ${smbdaX}
  }
`;

const StyledCloseMenuButton = styled.span`
  height: 40px;
  margin: 10px;
  font-size:2.5em;
  padding: 0px 10px 5px;
  border: 2.5px solid black;
  :hover {
    border: 2.5px solid lightgreen;
  }
  color:black;
  cursor: pointer;
`;


/* COMPONENT */
function MobileMenu({ SideMenuNav }: mobileMenuProperties) {
  /* HOOKS */
  // Create isSandwichMenuClicked & setIsSandwichMenuClicked useState (initial state will be false).
  const [isSandwichMenuClicked, setIsSandwichMenuClicked] = useState(false);

  /* EVENT LISTENERS */
  // Create a toggleSideMenu function in order for the Side Menu to be toggled off and on.
  const toggleSideMenu = () => setIsSandwichMenuClicked(!isSandwichMenuClicked);

  function SideMenu() {
    return isSandwichMenuClicked
      ? ReactDOM.createPortal(
        <>
          <StyledMenuButtonDivider>
            <StyledCloseMenuButton onClick={toggleSideMenu} data-testid="CloseMenuButton">X</StyledCloseMenuButton>
          </StyledMenuButtonDivider>
          <StyledSideMenu data-testid="SideMenu">
            <StyledSideMenuNav data-testid="SideMenuNav">{SideMenuNav}</StyledSideMenuNav>
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
        data-testid="SandwichMenu"
        onClick={toggleSideMenu}
        isSandwichMenuClicked={isSandwichMenuClicked}
      >
        |||
      </StyledSandwichMenu>
      <SideMenu />
    </>
  );
}

export default MobileMenu;
