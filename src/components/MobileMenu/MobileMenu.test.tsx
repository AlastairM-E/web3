/* IMPORTS */
import React, { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MobileMenu from './MobileMenu';

beforeEach(() => {
  jest.useFakeTimers();
});

/* TESTS */
test('Check that the MobileMenu makes a SideMenu only', () => {
  // Get the container element and check only the MobileMenu component is inside, which is done by
  // Root id has been set to the contianer to enable the React.createPortal whcih targets
  // the root div to work and send the jsx element to the div root and thsu it's destined container,
  // rather than returning a big fat error.
  // check the length of the container is one.
  // Check the SideMenu does not exists is by using the document.querySelectorAll(), it should
  // return undefined
  // Click on the MobileMenu Component --> this should create a SideMenu, therefore when the
  // SideMenu is queried for, it returns a truthy value.
  // Click on the MobileMenu Component again this should remove the SideMenu Component and therefore
  // In the context of timers when the slideMenu is undeinfed, there should be a 0.5 second
  // wait that check.
  // when the SideMenu is queried for again, should return nothing.

  const { container } = render(<MobileMenu SideMenuNav />);
  container.setAttribute('id', 'root');
  expect(container.children.length).toBe(1);

  const doesSideMenuExist = () => document.getElementById('SideMenu');
  expect(doesSideMenuExist()).toBeNull();

  const virtualMobileMenu = document.getElementById('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  act(() => {
    fireEvent.click(virtualMobileMenu);
    jest.advanceTimersByTime(500);
  });
  expect(setTimeout).toHaveBeenCalledTimes(3);

  expect(doesSideMenuExist()).toBeNull();
});


test('The MobileMenu should return a SideMenu which has a button which will close the SideMenu', () => {
  // Render(<MobileMenu>|||</MobileMenu>) = { container, getByTestId };
  // Root id has been set to the contianer to enable the React.createPortal whcih targets
  // the root div to work and send the jsx element to the div root and thsu it's destined container,
  // rather than returning a big fat error.
  // Have a variable to contain elements a queried for with a data-testid equal to SideMenu &
  // and the CloseMenuButton.
  // Check whether these values (which are functions) resolve true.
  // They should be undefined as they do not exist.
  // Then the menu should be clicked.
  // The CloseMenuButton and SideMenu should return truthy.
  // Then the CloseMenuButton should be clicked again.
  // This should mean that the ClsoeSideMenutButton and the SideMenu should both not exist.
  // In the context of timers when the slideMenu is undeinfed, there should be a 0.5 second
  // wait that check.
  // Therefore, they should both return undefined for the same reason.

  const { container } = render(<MobileMenu SideMenuNav />);
  container.setAttribute('id', 'root');

  const doesSideMenuExist = () => document.getElementById('SideMenu');
  const doesCloseMenuButtonExist = () => document.getElementById('CloseMenuButton');

  expect(doesSideMenuExist()).toBeNull();
  expect(doesCloseMenuButtonExist()).toBeNull();

  const virtualMobileMenu = document.getElementById('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuExist()).toBeTruthy();
  expect(doesCloseMenuButtonExist()).toBeTruthy();

  expect(setTimeout).toHaveBeenCalledTimes(1);

  const virtualCloseMenuButton = document.getElementById('CloseMenuButton');
  fireEvent.click(virtualCloseMenuButton);

  act(() => {
    jest.advanceTimersByTime(500);
    expect(setTimeout).toHaveBeenCalledTimes(3);
  });

  expect(doesSideMenuExist()).toBeNull();
  expect(doesCloseMenuButtonExist()).toBeNull();
});

test('The MobileMenu should return a SideMenu which contains menu items whcih the MobileMenu was passed down and only available on the actived SideMenu', () => {
  // Have a variable storing a list of page links.
  // These should be passed in to the rendered MobileMenu Component as the prop of SideMenuNav.
  // Extract out the container and getByTestId method via destructing.
  // Root id has been set to the contianer to enable the React.createPortal whcih targets
  // the root div to work and send the jsx element to the div root and thsu it's destined container,
  // rather than returning a big fat error.
  // Check that the SideMenuNav cannot be queried for by test id as it does not exist and therefore
  // returns undefined.
  // Then click the MobileMenu button.
  // Check that the SideMenuNav exist, quering for it should return Truthy.
  // Render out a list of page links which are the same as the page links passed in to the
  // MobileMenu component.
  // Get the containers children of the rendered page links.
  // Check that the children of SideMenuNav (aka the links passed into the MobileMenu) are equal to
  // the listOfPageLinks.
  // In the context of timers when the slideMenu is undeinfed, there should be a 0.5 second
  // wait that check.
  // Click the CloseMenuButton.
  // Check that the SideMenuNav does not exis, quering for the element should be undefined.

  const ListOfPageLinks = (
    <>
      <a href="about">about</a>
      <a href="contact">contact</a>
      <a href="portfolio">portfolio</a>
    </>
  );
  const { container } = render(
    <MobileMenu SideMenuNav={ListOfPageLinks} />,
  );
  container.setAttribute('id', 'root');
  const doesSideMenuNavExist = () => document.getElementById('SideMenuNav');

  expect(doesSideMenuNavExist()).toBeNull();

  const virtualMobileMenu = document.getElementById('SandwichMenu');
  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuNavExist()).toBeTruthy();

  const SideMenuNavChildren = document.getElementById('SideMenuNav').children;
  const virtualSideMenuPageLinks = render(ListOfPageLinks).container.children;

  expect(SideMenuNavChildren).toStrictEqual(virtualSideMenuPageLinks);

  expect(setTimeout).toHaveBeenCalledTimes(1);

  const virtualCloseMenuButton = document.getElementById('CloseMenuButton');

  fireEvent.click(virtualCloseMenuButton);
  act(() => {
    jest.advanceTimersByTime(500);
    expect(setTimeout).toHaveBeenCalledTimes(3);
  });

  expect(doesSideMenuNavExist()).toBeNull();
});

test('The background of the content is darkened when the Sandwich menu is clicked and toggle off when click again', () => {
  const { container } = render(<MobileMenu SideMenuNav />);
  container.setAttribute('id', 'root');

  const virtualMobileMenu = document.getElementById('SandwichMenu');
  const virtualCloseMenuButton = () => document.getElementById('CloseMenuButton');
  const doesSideMenuDarkenBackgroundExist = () => document.getElementById('SideMenuDarkenBackground');

  expect(doesSideMenuDarkenBackgroundExist()).toBeNull();

  fireEvent.click(virtualMobileMenu);

  expect(doesSideMenuDarkenBackgroundExist()).toBeTruthy();

  fireEvent.click(virtualCloseMenuButton());
  act(() => {
    jest.advanceTimersByTime(500);
    expect(setTimeout).toHaveBeenCalledTimes(3);
  });

  expect(doesSideMenuDarkenBackgroundExist()).toBeNull();
});
