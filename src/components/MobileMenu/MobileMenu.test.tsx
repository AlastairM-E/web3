/* IMPORTS */
import React, { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';

/* TESTS */
test('Check that the MobileMenu makes a SideMenu only', () => {
  // Get the container element and check only the MobileMenu component is inside, which is done by
  // check the length of the container is one.
  // Check the SideMenu does not exists is by using the document.querySelectorAll(), it should
  // return undefined
  // Click on the MobileMenu Component --> this should create a SideMenu, therefore when the
  // SideMenu is queried for, it returns a truthy value.
  // Click on the MobileMenu Component again this should remove the SideMenu Component and therefore
  // when the SideMenu is queried for again, should return nothing.
  const { container, getByTestId } = render(<MobileMenu />);
  expect(container.children.length).toBe(1);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  expect(doesSideMenuExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();

  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeUndefined();
});


test('The MobileMenu should return a SideMenu which has a button which will close the SideMenu', () => {
  // Render(<MobileMenu>|||</MobileMenu>) = { getByTestId };
  // Have a variable to contain elements a queried for with a data-testid equal to SideMenu &
  // and the CloseMenuButton.
  // Check whether these values (which are functions) resolve true.
  // They should be undefined as they do not exist.
  // Then the menu should be clicked.
  // The CloseMenuButton and SideMenu should return truthy.
  // Then the CloseMenuButton should be clicked again.
  // This should mean that the ClsoeSideMenutButton and the SideMenu should both not exist.
  // Therefore, they should both return undefined for the same reason.
  const { getByTestId } = render(<MobileMenu />);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  const doesCloseMenuButtonExist = () => document.querySelectorAll('[data-testid="CloseMenuButton"]')[0];

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseMenuButtonExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();
  expect(doesCloseMenuButtonExist()).toBeTruthy();

  const virtualCloseMenuButton = document.querySelectorAll('[data-testid="CloseMenuButton"]')[0];
  fireEvent.click(virtualCloseMenuButton);

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseMenuButtonExist()).toBeUndefined();
});

test('The MobileMenu should return a SideMenu which contains menu items whcih the MobileMenu was passed down and only available on the actived SideMenu', () => {
  // Have a variable storing a list of page links.
  // These should be passed in to the rendered MobileMenu Component as the prop of SideMenuNav.
  // Extract out the getByTestId method via destructing.
  // Check that the SideMenuNav cannot be queried for by test id as it does not exist and therefore
  // returns undefined.
  // Then click the MobileMenu button.
  // Check that the SideMenuNav exist, quering for it should return Truthy.
  // Render out a list of page links which are the same as the page links passed in to the
  // MobileMenu component.
  // Get the containers children of the rendered page links.
  // Check that the children of SideMenuNav (aka the links passed into the MobileMenu) are equal to
  // the listOfPageLinks.
  // Click the CloseMenuButton.
  // Check that the SideMenuNav does not exis, quering for the element should be undefined.
  const ListOfPageLinks = (
    <>
      <a href="about">about</a>
      <a href="contact">contact</a>
      <a href="portfolio">portfolio</a>
    </>
  );
  const { getByTestId } = render(<MobileMenu SideMenuNav={ListOfPageLinks}>|||</MobileMenu>);
  const doesSideMenuNavExist = () => document.querySelectorAll('[data-testid="SideMenuNav"]')[0];


  expect(doesSideMenuNavExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuNavExist()).toBeTruthy();

  const SideMenuNavChildren = document.querySelectorAll('[data-testid="SideMenuNav"]')[0].children;
  const virtualSideMenuPageLinks = render(ListOfPageLinks).container.children;

  expect(SideMenuNavChildren).toStrictEqual(virtualSideMenuPageLinks);

  const virtualCloseMenuButton = getByTestId('CloseMenuButton');
  fireEvent.click(virtualCloseMenuButton);

  expect(doesSideMenuNavExist()).toBeUndefined();
});
