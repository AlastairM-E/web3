/* IMPORTS */
import * as React from 'react';

import styled from 'styled-components';
import { MobileMenu } from '../index';

/* INTERFACE */
interface Title {
  title: string;
}

const StyledNavbar = styled.div`
    display:flex;
    grid-column:1/13;
    grid-row:1/3;
    align-items:center;
    border-bottom: 5px solid black;
    background:white;
    color: black;
`;

const Title = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  margin: 10px 10px 10px auto;
  flex:0.55;
  text-transform: uppercase;
  justify-self:center;
  align-items:center;
  font-size:2em;
  @media screen and (max-width: 670px) {
    font-size: 1.1em;
  }
`;

const PageLink = styled.a`
    text-decoration: none;
    color: black;
    font-size:1.5em;
    border-bottom: 2.5px solid white;
      :hover {
        border-bottom: 2.5px solid black;
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
    <StyledNavbar id="Navbar">
      <Title>{title}</Title>
      <MobileMenu SideMenuNav={<ListOfNavLinks />} />
    </StyledNavbar>
  );
}

export default Navbar;
