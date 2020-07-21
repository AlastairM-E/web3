/* IMPORTS */
import * as React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

/* TESTS */
test('should have all the links and elements the Navbar has been given', () => {
  // The Navbar text and links.
  const title = 'Alastair M-E';

  render(<Navbar title={title} />);

  const virtualNavbar = document.getElementById('Navbar');

  const navbarLength = virtualNavbar.children.length;
  const firstElementsText = virtualNavbar.children[0].textContent;
  // all text elements and the hidden Sandwich Menu
  expect(navbarLength).toStrictEqual(2);
  expect(firstElementsText).toStrictEqual(title);
});
