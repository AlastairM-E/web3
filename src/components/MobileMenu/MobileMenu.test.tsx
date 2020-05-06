/* IMPORTS */
import React, { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';

/* TESTS */
test('Check that the MobileMenu makes a SideMenu only', () => {
  // get container --> check only the MobileMenu component is inside.
  // This is done by check the length of the container.
  // Only way to check whether the SideMenu exists is by using the document.querySelectorAll().
  // check that the SideMenu does not exist --> therefore the selectory returns undefined.
  // Click on the MobileMenu Component --> this should create a SideMenu.
  // check that when the SideMenu is queried for, it returns a truthy value.
  // Click on the MobileMenu Component again --> should remove the SideMenu Component.
  // When the SideMenu is queried for again, should return nothing.
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
  // Have Variable on the queries for the data-testid to = sideMenu and also CloseSideMenuButton.
  // Check whetehr these value (which are functions) resolve true. They should return falsey.
  // Then the menu should be clicked.
  // The CloseSideMenuButton and SideMenu should return truthy.
  // Then the CloseSideMenuButton should be clicked.
  // This should mean that the ClsoeSideMenutButton and the SideMenu should both not exist.
  // Therefore, the should before return undefined.
  const { getByTestId } = render(<MobileMenu />);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  const doesCloseSideMenuButtonExist = () => document.querySelectorAll('[data-testid="CloseSideMenuButton"]')[0];

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseSideMenuButtonExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();
  expect(doesCloseSideMenuButtonExist()).toBeTruthy();

  const virtualCloseSideMenuButton = document.querySelectorAll('[data-testid="CloseSideMenuButton"]')[0];
  fireEvent.click(virtualCloseSideMenuButton);

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseSideMenuButtonExist()).toBeUndefined();
});

test('The MobileMenu should return a SideMenu which contains menu items whcih the MobileMenu was passed down and only available on the actived SideMenu', () => {
  // ^=* Check a avaliable storing the presumed list of page links.
  // ^=* Passed that in the render MobileMenu Component.
  // ^=* Extract out of that the getByTestId destructure.
  // ^=* Check that it can not get the SideMenuNav by test id --> it should be undefined.
  // ^=* Then click the MobileMenu button.
  // ^=* Check that the SideMenuNav exists --> it should be Truthy.
  // ^=* Render out a list of fakePageLinks and then get the containers children
  //     (which will be those links).
  // ^=* compare and contrast might work.
  // ^=* Check that the children of SideMenuNav are equal to the listOfPageLinks.
  // ^=* Click the closeSideMenuButton.
  // ^=* Check that the SideMenuNav does not exist --> it should be undefined.
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

  const virtualCloseSideMenuButton = getByTestId('CloseSideMenuButton');
  fireEvent.click(virtualCloseSideMenuButton);

  expect(doesSideMenuNavExist()).toBeUndefined();
});
