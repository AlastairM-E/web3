function webMonetizationReducer(state: any, { action, payload }: { action : string, payload: any}) {
  switch (action) {
    case 'CHANGE_WEB_MONETIZATION_STATUS':
      return payload;
      break;

    default:
      return state;
      break;
  }
}

function toggleMonetizationReducer(state, { action }) {
  switch (action) {
    case 'TOGGLE':
      console.log({ state });
      return !state;
      break;

    default:
      return state;
      break;
  }
}


export {
  webMonetizationReducer,
  toggleMonetizationReducer,
};
