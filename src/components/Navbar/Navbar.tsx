/* IMPORTS */
import * as React from 'react';

import styled from 'styled-components';
import { MobileMenu } from '../index';

/* INTERFACE */
interface Title {
  title: string;
}

// styled from styled-components

/* Navbar styles: */
// - Display the Navbar in css flexbox.
// - It takes up about a quarter of page in height and the entire width of the page.
// - It is aligns the items in the middle of Navbar, between the top and the bottom.
const StyledNavbar = styled.div`
    display:flex;
    grid-column:1/13;
    grid-row:1/3;
    align-items:center;
    border-bottom: 5px solid black;
    background:lightgreen;
    color: black;
`;

/* Navbar Title styles: */
// - Give the title padding of 10px and a margin of 10px.
// - Give the property of flex 1, which means it will be on the left hand side and
//   all other element will be on the right-hand side, with considerable distance between
//   the two.
const Title = styled.h2`
    padding: 10px;
    margin: 10px;
    flex:1;
`;

/* PageLink styles: */
// - Has a padding of 10px and a margin of 10pxs.
// - Will be on the end due to the Title property of flex 1.
// - Has no underline as it is an A tag, which has a default underline.
// - Has a color of white to make sure that the a tage does default the colors of blue/red/purple
//   for when it has been unclicked/is current clicked/and has been clicked.
// - On hover, it will produce a bottom border of 2.5px, solid and white,
//   which is a bit like an underline, but with more padding.
// - on the medium of screens and when the page ahs a max-width of 670px,
//   the a links will disappear.
const PageLink = styled.a`
    text-decoration: none;
    color: black;
    font-size:1.5em;
    border-bottom: 2.5px solid lightgreen;
      :hover {
        border-bottom: 2.5px solid black;
      }

    @media screen and (max-width: 670px) {
      border-bottom: 2.5px solid black;
      :hover {
        border-bottom: 2.5px solid lightgreen;
      }
    }
`;

const DesktopPageLinks = styled.span`
  * {
    padding: 10px;
    margin: 10px;
  }
  @media screen and (max-width: 670px) {
        display:none;
  }
`;


/* COMPONENT */
function Navbar({ title }: Title) {
  const ListOfNavLinks = () => (
    <>
      <PageLink href="/home">Home</PageLink>
      <PageLink href="/about">About</PageLink>
      <PageLink href="/contact">Contact</PageLink>
      <PageLink href="/portfolio">Portfolio</PageLink>
    </>
  );

  /* RENDER */
  return (
    <StyledNavbar data-testid="Navbar">
      <Title>{title}</Title>
      <DesktopPageLinks><ListOfNavLinks /></DesktopPageLinks>
      <MobileMenu SideMenuNav={<ListOfNavLinks />} />
    </StyledNavbar>
  );
}

export default Navbar;
