/* IMPORTS */
import React, { useState, Fragment } from 'react';

import styled from 'styled-components';

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

const SideMenu = styled.span``;

/* COMPONENT */
function MobileMenu({ children }: { children: string }) {
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);

  /* RENDER */
  return (
    <>
      <StyledMobileMenu
        data-testid="MobileMenu"
        onClick={() => setIsMobileMenuClicked(!isMobileMenuClicked)}
      >
        {children}
      </StyledMobileMenu>
      {isMobileMenuClicked ? <SideMenu data-testid="SideMenu" /> : null}
    </>

  );
}

export default MobileMenu;
