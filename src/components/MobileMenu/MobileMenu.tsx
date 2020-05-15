/* IMPORTS */
import React, { useState, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';


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
        display:${(props: { isSandwichMenuClicked: boolean}) => (props.isSandwichMenuClicked ? 'none' : 'inline-block')};
        :hover {
            border: 2.5px solid black;
        }
    }
`;

const StyledSideMenu = styled.span`
  display:none;
  @media screen and (max-width: 670px) {
    display:inline-block;
    background: lightgreen;
    width: 200px;
    height: 100px;
    border-left: 5px solid black;
    padding: 0px 0px 602px 0px;
    margin-top: 600px;
  }
`;
const StyledSideMenuNav = styled.ul`
  * {
    display:inline-block;
    margin: 10px;
  }
`;

const StyledMenuButtonDivider = styled.span`
  display: flex;
  justify-content : flex-end;
  border-bottom: 5px solid black;
  padding: 10px;
  height: 81.5px;
  background: yellow;
`;

const StyledCloseMenuButton = styled.span`
  height: 40px;
  margin: 10px;
  font-size:2.5em;
  padding: 0px 10px 5px;
  border: 2.5px solid yellow;
  :hover {
    border: 2.5px solid black;
  }
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
      {isSandwichMenuClicked
        ? (
          <StyledSideMenu data-testid="SideMenu">
            <StyledMenuButtonDivider>
              <StyledCloseMenuButton onClick={toggleSideMenu} data-testid="CloseMenuButton">X</StyledCloseMenuButton>
            </StyledMenuButtonDivider>
            <StyledSideMenuNav data-testid="SideMenuNav">{SideMenuNav}</StyledSideMenuNav>
          </StyledSideMenu>
        ) : null}
    </>
  );
}

export default MobileMenu;
