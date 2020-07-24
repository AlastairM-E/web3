/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

/* STYLES */
const StyledSkills = styled(motion.div)`
  position: fixed;

  left: 37.5%;

  height: 500px;
  width: 400px;
  padding: 25px;
  margin-top: 111.75px;
  border:2.5px solid black;
`;

/* VARIANTS */
const skillsVariants = {
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
function Skills() {
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

  return (
    <StyledSkills
      variants={skillsVariants}
      initial={hasFadedUp ? 'initial' : 'none'}
      animate={hasFadedUp ? 'animate' : 'none'}
    >
      Hello world
    </StyledSkills>
  );
}

export default Skills;
