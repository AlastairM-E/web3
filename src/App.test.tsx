import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should App be loadable', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App').children.length).toStrictEqual(1);
});
