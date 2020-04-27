/* IMPORTS */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';

/* TESTS */
test('Check that the MobileMenu makes a SideMenu only', () => {
  // get container --> check only the MobileMenu component is inside.
  // Also check this by the getByTestId('MobileMenu') method.
  // check that the SideMenu does not exist --> therefore the selectory returns undefined.
  // Click on the MobileMenu Component --> this should create a SideMenu.
  // check that when the SideMenu is queried for, it returns a truthy value.
  // Click on the MobileMenu Component again --> should remove the SideMenu Component.
  // When the SideMenu is queried for again, should return nothing.
  const { container, getByTestId } = render(<MobileMenu>|||</MobileMenu>);
  expect(container.children.length).toBe(1);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  expect(doesSideMenuExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('MobileMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();

  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeUndefined();
});


test('The MobileMenu should return a SideMenu which has a button which will close the SideMenu', () => {
  // Render(<MobileMenu>|||</MobileMenu>) = { getBYTestId };
  // Have Variable on the queries for the data-testid to = sideMenu and also CloseSideMenuButton.
  // Check whetehr these value (which are functions) resolve true. They should return falsey.
  // Then the menu should be clicked.
  // The CloseSideMenuButton and SideMenu should return truthy.
  // Then the CloseSideMenuButton should be clicked.
  // This should mean that the ClsoeSideMenutButton and the SideMenu should both not exist.
  // Therefore, the should before return undefined.
  const { getByTestId } = render(<MobileMenu>|||</MobileMenu>);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  const doesCloseSideMenuButtonExist = () => document.querySelectorAll('[data-testid="CloseSideMenuButton"]')[0];

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseSideMenuButtonExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('MobileMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();
  expect(doesCloseSideMenuButtonExist()).toBeTruthy();

  const virtualCloseSideMenuButton = document.querySelectorAll('[data-testid="CloseSideMenuButton"]')[0];
  fireEvent.click(virtualCloseSideMenuButton);

  expect(doesSideMenuExist()).toBeUndefined();
  expect(doesCloseSideMenuButtonExist()).toBeUndefined();
});
