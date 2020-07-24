/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll, useCycle } from 'framer-motion';

/* STYLES */
const StyledAbout = styled(motion.span)`
    position: fixed; 

    left: 5%;

    height: 400px;
    width: 25%;
    padding: 25px;
    margin-top: 161.75px;
    border: 2.5px solid black;
    display: flex;
    align-self:end;
`;

/* VARIANTS */
const aboutVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: [0, 0, 0, 1, 1],
    y: -100,
    transition: {
      duration: 1.5,
      type: 'tween',
    },
  },
  none: {
    opacity: 0,
  },
};

/* COMPONENT */
function About() {
  // /* HOOKS */
  const [hasFadedUp, setHasFadedUp] = useState(false);
  const { scrollY } = useViewportScroll();

  /* EVENTS */
  scrollY.onChange(() => {
    if (hasFadedUp !== true && scrollY.get() >= 120) {
      setHasFadedUp(true);
    }

    if (hasFadedUp !== false && scrollY.get() < 120) {
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
      About
    </StyledAbout>
  );
}

export default About;
