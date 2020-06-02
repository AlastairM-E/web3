import { webMonetizationReducer, toggleMonetizationReducer } from './Reducer';

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
});
