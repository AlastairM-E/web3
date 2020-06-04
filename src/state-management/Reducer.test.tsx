import { webMonetizationReducer, toggleMonetizationReducer, additionalTimeCookieReducer } from './Reducer';

test('webMonetizationReducer', () => {
  const testReducerState = { state: 'initialStartingTest ' };
  const defaultValueOfWebMonetizationReducer = webMonetizationReducer(
    testReducerState,
    { action: '', payload: '' },
  );

  expect(defaultValueOfWebMonetizationReducer).toStrictEqual(testReducerState);

  const testPayload = { state: 'payloadState' };
  const valueOfPayloadVersionOfWebMonetizationReducer = webMonetizationReducer(
    testReducerState,
    { action: 'CHANGE_WEB_MONETIZATION_STATUS', payload: testPayload },
  );
  expect(valueOfPayloadVersionOfWebMonetizationReducer).toStrictEqual(testPayload);
});

test('toggleMonetizationReducer', () => {
  const testReducerState = true;
  const defaultValueOfToggleMonetizationReducer = toggleMonetizationReducer(
    testReducerState,
    { action: '' },
  );

  expect(defaultValueOfToggleMonetizationReducer).toStrictEqual(testReducerState);

  const toggleAction = { action: 'TOGGLE' };
  const valueOfToggleMonetizationReducerFromTheStateOfTrue = toggleMonetizationReducer(
    testReducerState,
    toggleAction,
  );
  expect(valueOfToggleMonetizationReducerFromTheStateOfTrue).toStrictEqual(false);

  const reverseToggleFromToggleMonetizationReducer = toggleMonetizationReducer(
    valueOfToggleMonetizationReducerFromTheStateOfTrue,
    toggleAction,
  );

  expect(reverseToggleFromToggleMonetizationReducer).toStrictEqual(true);

  const disableAction = { action: 'DISABLE' };
  const disabledWebMonetizationReducer = toggleMonetizationReducer(
    true,
    disableAction,
  );

  expect(disabledWebMonetizationReducer).toStrictEqual(false);

  const anotherDisableActionToWebMonetizationReducer = toggleMonetizationReducer(
    false,
    disableAction,
  );

  expect(anotherDisableActionToWebMonetizationReducer).toStrictEqual(false);

  const enableAction = { action: 'ENABLE' };
  const anEnabledWebMonetizationReducer = toggleMonetizationReducer(
    false,
    enableAction,
  );

  expect(anEnabledWebMonetizationReducer).toStrictEqual(true);

  const constantlyEnabledWebMonetizationReducer = toggleMonetizationReducer(
    true,
    enableAction,
  );

  expect(constantlyEnabledWebMonetizationReducer).toStrictEqual(true);
});

test('addtionalTimeCookieReducer functions properly', () => {
  const testState: void = null;
  const defaultAddtionalTimeCookieReducer = additionalTimeCookieReducer(
    testState,
    { action: '' },
  );

  expect(defaultAddtionalTimeCookieReducer).toStrictEqual(testState);

  const additionalTime3000 = 3000;
  const addAdditionalTime3000FromCookieAction = {
    action: 'ADD_COOKIE_ADDITIONAL_TIME',
    cookie: `additionalTime=${additionalTime3000}`,
  };
  const additionalTimeAddedCookieReducer = additionalTimeCookieReducer(
    testState,
    addAdditionalTime3000FromCookieAction,
  );

  expect(additionalTimeAddedCookieReducer).toStrictEqual(additionalTime3000);

  const minusSecondFromAdditionalTimeAction = { action: 'MINUS_A_SECOND_FROM_ADDITIONAL_TIME' };
  const newAdditionalTimeFromCookieReducer = additionalTimeCookieReducer(
    additionalTimeAddedCookieReducer,
    minusSecondFromAdditionalTimeAction,
  );

  expect(newAdditionalTimeFromCookieReducer).toStrictEqual(additionalTime3000 - 1000);
});
