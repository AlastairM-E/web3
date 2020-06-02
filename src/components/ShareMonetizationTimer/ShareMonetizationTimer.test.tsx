/* IMPORTS */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
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
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:1000');

    jest.advanceTimersByTime(4000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:5000');

    jest.advanceTimersByTime(70000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:75000');
    expect(document.cookie).toStrictEqual('additionalTime=0');

    jest.advanceTimersByTime(1000);
    expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:76000');
    expect(document.cookie).toStrictEqual('additionalTime=1000');
  });

  // const virtualToggleMonetizationButton = document.getElementById('ToggleMonetizationButton');

  // fireEvent.click(virtualToggleMonetizationButton);

  // act(() => {
  //   const virtualShareMonetizationTimer = () => document.getElementById('ShareMonetizationTimer');

  //   expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:0');
  //   expect(document.cookie).toStrictEqual('');

  //   jest.advanceTimersByTime(1000);
  //   expect(setInterval).toHaveBeenCalledTimes(1);
  //   expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer0');
  //   expect(document.cookie).toStrictEqual('');

  //   jest.advanceTimersByTime(4000);
  //   expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:0');
  //   expect(document.cookie).toStrictEqual('');

  //   jest.advanceTimersByTime(70000);
  //   expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:0');
  //   expect(document.cookie).toStrictEqual('');

  //   jest.advanceTimersByTime(1000);
  //   expect(virtualShareMonetizationTimer().textContent).toStrictEqual('ShareMonetizationTimer:0');
  //   expect(document.cookie).toStrictEqual('');
  // });
});
