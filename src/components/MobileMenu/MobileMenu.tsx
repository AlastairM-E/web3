/* IMPORTS */
import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';


/* INTERFACES */
interface mobileMenuProperties {
  SideMenuNav: any;
}

/* ANIMATION */
const slide = keyframes`
  from {
    position:absolute;
    top:0%;
    right:-10%;
    height: 16.666666666%;
    width: 33.33333333333%;
    background: yellow;
  } 

  to {
    position:absolute;
    top:0%;
    right:0%;
    height: 16.666666666%;
    width: 33.33333333333%;
    background: orange;
  }
`;

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
    background: white;
    grid-row: 3/13;
    grid-column: 9/13;
    border-left: 5px solid black;
  }
`;
const StyledSideMenuNav = styled.ul`
  * {
    display:inline-block;
    margin: 10px;
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
    animation: ${slide} 10s ease-in;
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
