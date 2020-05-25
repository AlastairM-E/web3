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

const slideSideMenu = keyframes`
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

const toggleSandwichMenuAnimation = (props: { isSandwichMenuClicked: boolean}) => {
  if (props.isSandwichMenuClicked) {
    return 'none';
  }
  return 'inline-block';
};

/* SHORTING FUNCTION */
const smbdaI = css`animation: ${slideMenuButtonDividerOut} 0.5s ease-out;`;
const smbdaX = css`animation: ${slideMenuButtonDividerOut} 0.5s ease-out;`;

export {
  slideMenuButtonDividerIn,
  slideMenuButtonDividerOut,
  slideSideMenu,
  smbdaI,
  smbdaX,
  toggleSandwichMenuAnimation,
};
