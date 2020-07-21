import React from 'react';
import { render } from '../unused/components/Article/@testing-library/react';
import App from './App';

test('should App be loadable', () => {
  const { container } = render(<App />);
  expect(container.children.length).toStrictEqual(2);
});
