/* IMPORTS */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';

/* TESTS */
test('Check that the MobileMenu makes a SideMenu', () => {
  const { container, getByTestId } = render(<MobileMenu>|||</MobileMenu>);
  expect(container.children.length).toBe(1);

  const doesSideMenuExist = () => document.querySelectorAll('[data-testid="SideMenu"]')[0];
  expect(doesSideMenuExist()).toBeUndefined();

  const virtualMobileMenu = getByTestId('MobileMenu');

  fireEvent(
    virtualMobileMenu,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

  expect(doesSideMenuExist()).toBeTruthy();
});
