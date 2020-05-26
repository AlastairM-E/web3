import { keyframes, css } from 'styled-components';

/* ANIMATION */
const slideMenuButtonDividerIn = keyframes`
    from {
      position:absolute;
      top:-0.725%;
      right:-33.33333333333%;
      height: 16.666666666%;
      width: 33.33333333333%;
    } 
  
    to {
      position:absolute;
      top:-0.725%;
      right:0%;
      height: 16.666666666%;
      width: 33.33333333333%;
    }
`;

const slideMenuButtonDividerOut = keyframes`
    from {
      position:absolute;
      top:-0.725%;
      right:0%;
      height: 16.666666666%;
      width: 33.33333333333%;
    }
  
    to {
      position:absolute;
      top:-0.725%;
      right:-33.33333333333%;
      height: 16.666666666%;
      width: 33.33333333333%;
    }
`;

const slideSideMenuIn = keyframes`
    from {
      position:absolute;
      top:16.666666666%;
      right:-33.33333333333%;
      height: 83.33333333333%;
      width: 33.33333333333%;
    } 
  
    to {
      position:absolute;
      top:16.666666666%;
      right:0%;
      height: 83.33333333333%;
      width: 33.33333333333%;
    }
`;

const slideSideMenuOut = keyframes`
    from {
      position:absolute;
      top:16.666666666%;
      right:0%;
      height: 83.33333333333%;
      width: 33.33333333333%;
    } 
  
    to {
      position:absolute;
      top:16.666666666%;
      right:-33.33333333333%;
      height: 83.33333333333%;
      width: 33.33333333333%;
    }
`;

/* SHORTING FUNCTION */
const smbdaI = css`animation: ${slideMenuButtonDividerIn} 0.5s ease-in;`;
const smbdaX = css`animation: ${slideMenuButtonDividerOut} 10s ease-in;`;
const ssmaI = css`animation: ${slideSideMenuIn} 0.5s ease-in;`;
const ssmaX = css`animation: ${slideSideMenuOut} 10s ease-in;`;

const toggleDisplaySandwichMenu = (props: { isSandwichMenuClicked: boolean}) => {
  if (props.isSandwichMenuClicked) {
    return 'none';
  }
  return 'inline-block';
};

const toggleDividerAnimation = (props: { isSandwichMenuClickedProps: boolean}) => {
  if (props.isSandwichMenuClickedProps) {
    return smbdaX;
  }
  return smbdaI;
};

const toggleSideMenuAnimation = (props: { isSandwichMenuClickedProps: boolean}) => {
  if (props.isSandwichMenuClickedProps) {
    return ssmaX;
  }
  return ssmaI;
};


export {
  slideMenuButtonDividerIn,
  slideMenuButtonDividerOut,
  smbdaI,
  smbdaX,
  ssmaI,
  ssmaX,
  toggleDividerAnimation,
  toggleSideMenuAnimation,
  toggleDisplaySandwichMenu,
};
