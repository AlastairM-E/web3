/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

/* STYLES */
const StyledContainer = styled(motion.span)`
  
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
const containerVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
  none: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'tween',
    },
  },
};

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
  const [hasFadedDown, setHasFadedDown] = useState(false);
  const { scrollY } = useViewportScroll();

  /* EVENTS */
  scrollY.onChange(() => {
    if (scrollY.get() > 0 && scrollAnimation === 'animate') {
      setScrollAnimation('initial');
    }
    if (scrollY.get() === 0 && scrollAnimation === 'initial') {
      setScrollAnimation('animate');
    }

    if (hasFadedDown !== true && scrollY.get() > 20) {
      setHasFadedDown(true);
    }

    if (hasFadedDown !== false && scrollY.get() <= 20) {
      setHasFadedDown(false);
    }
  });

  console.log({ hasFadedDown });

  return (
    <StyledContainer
      variants={containerVariants}
      initial={hasFadedDown ? 'initial' : 'none'}
      animate={hasFadedDown ? 'animate' : 'none'}
    >
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
