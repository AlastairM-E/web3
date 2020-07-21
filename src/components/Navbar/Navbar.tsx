/* IMPORTS */
import * as React from 'react';

import styled from 'styled-components';
import { MobileMenu } from '../index';

/* HELPERS */
const detailColour = (props: any) => props.theme.detailColour;
const backgroundColour = (props: any) => props.theme.backgroundColour;

/* INTERFACE */
interface NavbarProps {
  title: string;
}

/* STYLES */
const StyledNavbar = styled.div`
    grid-column:1/13;
    grid-row:1/2;

    display:flex;
    align-items:center;
    justify-content: flex-end;

    border-bottom: 5px solid ${(props) => detailColour(props)};

    background:${(props) => backgroundColour(props)};

    color: ${(props) => detailColour(props)};

    svg {
      fill: ${(props) => detailColour(props)};
    }
`;

const Title = styled.a`

  display:flex;
  flex:0.52;
  justify-self:center;
  align-items:center;

  padding: 10px;
  margin: 10px;
  
  font-family: Arial, Helvetica, sans-serif;
  font-size:1.1em;
  letter-spacing:2.5px;
  text-transform: uppercase;
  
  @media screen and (max-width: 600px) {
    flex:0.57;
  }
`;

const PageLink = styled.a`
    border-bottom: 2.5px solid ${(props) => backgroundColour(props)};

    color: ${(props) => detailColour(props)};
    font-size:1.5em;
    text-decoration: none;
    
    :hover {
      border-bottom: 2.5px solid ${(props) => detailColour(props)};
    }
`;

/* COMPONENT */
function Navbar({ title }: NavbarProps) {
  const ListOfNavLinks = () => (
    <>
      <PageLink href="/">Home</PageLink>
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
