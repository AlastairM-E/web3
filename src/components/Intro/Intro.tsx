/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

/* STYLES */
const StyledContainer = styled.span`
  
  display:flex;
  align-self:center;
  justify-content:center;
  align-items:center;

  position:fixed;

  * {
    display: inline-block;
  }
`;

const StyledArrowDown = styled(motion.span)`
  position: absolute;
`;

/* VARIANTS */
const scrollArrowPromptVariants = {
  initial: {
    opacity: 1,
    transition: {
      ease: 'easeIn',
      yoyo: 0,
    },
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
      yoyo: Infinity,
    },
  },
};

/* COMPONENT */
function Intro() {
  /* HOOKS */
  const [scrollAnimation, setScrollAnimation] = useState('animate');
  const [opacity, setOpacity] = useState(1);
  const { scrollY } = useViewportScroll();

  /* EVENTS */
  scrollY.onChange(() => {
    if (scrollY.get() > 0 && scrollAnimation === 'animate') {
      setScrollAnimation('initial');
    }
    if (scrollY.get() === 0 && scrollAnimation === 'initial') {
      setScrollAnimation('animate');
    }

    if (scrollY.get() >= 20 && scrollY.get() < 40 && opacity !== 0.8) {
      setOpacity(0.8);
    }

    if (scrollY.get() >= 40 && scrollY.get() < 60 && opacity !== 0.6) {
      setOpacity(0.6);
    }

    if (scrollY.get() >= 60 && scrollY.get() < 80 && opacity !== 0.4) {
      setOpacity(0.4);
    }

    if (scrollY.get() >= 80 && scrollY.get() < 100 && opacity !== 0.2) {
      setOpacity(0.2);
    }

    if (scrollY.get() >= 100 && opacity !== 0) {
      setOpacity(0);
    }
  });

  console.log({ scrollAnimation });

  return (
    <StyledContainer style={{ opacity }}>
      <span>Please scroll down</span>
      <StyledArrowDown initial={{ rotate: -45, y: 40 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="100px" height="48px">
          <path d="M0 0h24v24H0z" fill="none" />
          <motion.path
            d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"
            variants={scrollArrowPromptVariants}
            initial="initial"
            animate={scrollAnimation}
          />
        </svg>
      </StyledArrowDown>

    </StyledContainer>
  );
}

export default Intro;
