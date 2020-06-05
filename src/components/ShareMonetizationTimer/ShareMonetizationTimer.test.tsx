/* IMPORTS */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../../App';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


jest.useFakeTimers();

/* TESTS */
test.skip('Test that the timer works', () => {
  act(() => {
    ReactDOM.render(
      <>
        <App />
      </>, container,
    );
  });
  act(() => {
    const virtualShareMonetizationTimer = () => document.getElementById('ShareMonetizationTimer');

    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:0');

    jest.advanceTimersByTime(1000);
    expect(setInterval).toHaveBeenCalledTimes(3);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:1000');

    jest.advanceTimersByTime(4000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:5000');

    jest.advanceTimersByTime(70000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:75000');

    jest.advanceTimersByTime(1000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:76000');
  });
});
