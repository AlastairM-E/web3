/* ANIMATION */
const sandwichMenuDividerVarients = {
  InitDividerIn: {
    position: 'absolute',
    top: '-0.725%',
    right: '-35%',
    height: '16.666666666%',
    width: '33.33333333333%',
  },

  slideDividerIn: {
    position: 'absolute',
    top: '-0.725%',
    right: '0%',
    height: '16.666666666%',
    width: '33.33333333333%',
  },
  InitDividerOut: {
    position: 'absolute',
    top: '-0.725%',
    right: '0%',
    height: '16.666666666%',
    width: '33.33333333333%',
  },

  slideDividerOut: {
    position: 'absolute',
    top: '-0.725%',
    right: '-35%',
    height: '16.666666666%',
    width: '33.33333333333%',
  },
};

const sideMenuVariants = {
  InitSideMenuIn: {
    position: 'absolute',
    top: '16.666666666%',
    right: '-35%',
    height: '83.33333333333%',
    width: '33.33333333333%',
  },

  slideSideMenuIn: {
    position: 'absolute',
    top: '16.666666666%',
    right: '0%',
    height: '83.33333333333%',
    width: '33.33333333333%',
  },
  InitSideMenuOut: {
    position: 'absolute',
    top: '16.666666666%',
    right: '0%',
    height: '83.33333333333%',
    width: '33.33333333333%',
  },

  slideSideMenuOut: {
    position: 'absolute',
    top: '16.666666666%',
    right: '-35%',
    height: '83.33333333333%',
    width: '33.33333333333%',
  },
};

/* SHORTING FUNCTION */
const transition = '0.5s ease-in';

export {
  sideMenuVariants,
  sandwichMenuDividerVarients,
  transition,
};
