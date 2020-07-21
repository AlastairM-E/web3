/* ANIMATION */
const sandwichMenuDividerVarients = (isScreenWiderThan975px: boolean) => ({
  InitDividerIn: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    position: 'absolute',
    top: '-0.725%',
    right: '-35%',
    height: '115px',
    width: '33.33333333333%',
  },

  slideDividerIn: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    position: 'absolute',
    top: '-0.725%',
    right: '0%',
    height: '115px',
    width: '33.33333333333%',
  },
  InitDividerOut: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    position: 'absolute',
    top: '-0.725%',
    right: '0%',
    height: '115px',
    width: '33.33333333333%',
  },

  slideDividerOut: {
    display: isScreenWiderThan975px ? 'flex' : 'none',
    position: 'absolute',
    top: '-0.725%',
    right: '-35%',
    height: '115px',
    width: '33.33333333333%',
  },
});

const sideMenuVariants = (isScreenWiderThan975px: boolean) => ({
  InitSideMenuIn: {
    position: 'absolute',
    top: '16.61%',
    right: isScreenWiderThan975px ? '-35%' : '-100%',
    height: '84.33333333333%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },

  slideSideMenuIn: {
    position: 'absolute',
    top: '16.61%',
    right: '0%',
    height: '84.33333333333%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },
  InitSideMenuOut: {
    position: 'absolute',
    top: '16.61%',
    right: '0%',
    height: '84.33333333333%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },

  slideSideMenuOut: {
    position: 'absolute',
    top: '16.61%',
    right: isScreenWiderThan975px ? '-35%' : '-100%',
    height: '84.33333333333%',
    width: isScreenWiderThan975px ? '33.33333333333%' : '100%',
  },
});

export {
  sideMenuVariants,
  sandwichMenuDividerVarients,
};
