/* IMPORTS */
import React from 'react';
import { render } from '../components/Article/@testing-library/react';
import NightMode from './NightMode';

/* TESTS */
test('Check that the icon exist at the first render', () => {
  render(<NightMode />);
  const virtualLightModeIcon = document.getElementById('LightModeIcon');
  const virtualDarkModeIcon = document.getElementById('DarkModeIcon');

  expect(virtualLightModeIcon).toBeTruthy();
  expect(virtualDarkModeIcon).toBeTruthy();
});
