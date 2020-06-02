function webMonetizationReducer(state: any, { action, payload }: { action : string, payload: any}) {
  switch (action) {
    case 'CHANGE_WEB_MONETIZATION_STATUS':
      return payload;

    default:
      return state;
  }
}

function toggleMonetizationReducer(state, { action }) {
  switch (action) {
    case 'TOGGLE':
      return !state;

    default:
      return state;
  }
}


export {
  webMonetizationReducer,
  toggleMonetizationReducer,
};
