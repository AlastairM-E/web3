/* ANIMATION */
const sandwichMenuDividerVarients = (isScreenWiderThan975px: boolean) => ({
  InitDividerIn: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    top: '-0.725%',
    right: '-35%',
  },

  slideDividerIn: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    top: '-0.725%',
    right: '0%',
  },
  InitDividerOut: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    top: '-0.725%',
    right: '0%',
  },

  slideDividerOut: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    top: '-0.725%',
    right: '-35%',
  },
});

const sideMenuVariants = (isScreenWiderThan975px: boolean) => ({
  InitSideMenuIn: {
    top: '16.61%',
    right: isScreenWiderThan975px ? '-35%' : '-100%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },

  slideSideMenuIn: {
    top: '16.61%',
    right: '0%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },
  InitSideMenuOut: {
    top: '16.61%',
    right: '0%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },

  slideSideMenuOut: {
    top: '16.61%',
    right: isScreenWiderThan975px ? '-35%' : '-100%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },
});

export {
  sideMenuVariants,
  sandwichMenuDividerVarients,
};
