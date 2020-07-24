/* IMPORTS */
import React, { Fragment, useState } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

import * as url from '../../assets/images/cardMainImage.jpg';

/* STYLES */
const StyledAbout = styled(motion.span)`
    position: fixed; 

    left: 5%;

    height: 500px;
    width: 400px;
    padding: 25px;
    margin-top: 111.75px;
    border: 2.5px solid black;

    display: inline-block;
    align-self:end;
`;

const StyledHr = styled.hr`
  border: none;
  border-bottom: 2.5px solid black;
`;

const StyledImage = styled.img`
  height: 292px;
  width: 400px;
  justify-self: center;
`;

const StyledTextContent = styled.div`
  height: 198px;
  margin-top: 2.5px;

  display:flex;
  align-items:center;
`;

/* VARIANTS */
const aboutVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: -100,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  none: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },

};

/* COMPONENT */
function About() {
  // /* HOOKS */
  const [hasFadedUp, setHasFadedUp] = useState(false);
  const { scrollY } = useViewportScroll();

  /* EVENTS */
  scrollY.onChange(() => {
    if (hasFadedUp !== true && scrollY.get() >= 45) {
      setHasFadedUp(true);
    }

    if (hasFadedUp !== false && scrollY.get() < 45) {
      setHasFadedUp(false);
    }
  });

  /* RENDER */
  return (
    <StyledAbout
      variants={aboutVariants}
      initial={hasFadedUp ? 'initial' : 'none'}
      animate={hasFadedUp ? 'animate' : 'none'}
    >
      <span>About</span>
      <StyledHr />
      <StyledImage
        src={url.default}
        alt="The creator of the website sitting down, aka myself"
      />
      <StyledTextContent>
        Hi, I am Alastair Mottram-Epson. I am a Front-End developer who specialises in React.
      </StyledTextContent>
    </StyledAbout>
  );
}

export default About;
