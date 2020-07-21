function webMonetizationReducer(state: any, { action, payload }: { action : string; payload: any; }) {
  switch (action) {
    case 'CHANGE_WEB_MONETIZATION_STATUS':
      return payload;

    default:
      return state;
  }
}

function toggleMonetizationReducer(state: any, { action }: { action: string; }) {
  switch (action) {
    case 'TOGGLE':
      return !state;

    case 'DISABLE':
      return false;

    case 'ENABLE':
      return true;

    default:
      return state;
  }
}

function additionalTimeCookieReducer(state: any, { action, cookie = '' }: { action: string; cookie?: string; }) {
  switch (action) {
    case 'ADD_COOKIE_ADDITIONAL_TIME':
      return Number(cookie.split('additionalTime=')[1]);

    case 'MINUS_A_SECOND_FROM_ADDITIONAL_TIME':
      return state - 1000;

    default:
      return state;
  }
}


export {
  webMonetizationReducer,
  toggleMonetizationReducer,
  additionalTimeCookieReducer,
};
