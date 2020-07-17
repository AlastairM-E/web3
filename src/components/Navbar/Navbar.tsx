/* IMPORTS */
import * as React from 'react';

import styled from 'styled-components';
import { MobileMenu } from '../index';

const detailColour = (props: any) => props.theme.detailColour;
const backgroundColour = (props: any) => props.theme.backgroundColour;

/* INTERFACE */
interface NavbarProps {
  title: string;
}

const StyledNavbar = styled.div`
    display:flex;
    grid-column:1/13;
    grid-row:1/3;
    align-items:center;
    border-bottom: 5px solid ${(props) => detailColour(props)};
    background:${(props) => backgroundColour(props)};
    color: ${(props) => detailColour(props)};
    justify-content: flex-end;

    svg {
      fill: ${(props) => detailColour(props)};
    }
`;

const Title = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  margin: 10px;
  flex:0.52;
  letter-spacing:2.5;
  text-transform: uppercase;
  justify-self:center;
  align-items:center;
  font-size:1.1em;
  @media screen and (max-width: 600px) {
    flex:0.57;
  }
`;

const PageLink = styled.a`
    text-decoration: none;
    color: ${(props) => detailColour(props)};
    font-size:1.5em;
    border-bottom: 2.5px solid ${(props) => backgroundColour(props)};
      :hover {
        border-bottom: 2.5px solid ${(props) => detailColour(props)};
      }
`;

/* COMPONENT */
function Navbar({ title }: NavbarProps) {
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
