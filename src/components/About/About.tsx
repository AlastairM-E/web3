/* IMPORTS */
import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

/* STYLES */
const StyledAbout = styled(motion.span)`
    position: fixed; 

    height: 110px;
    width: 300px;
    border: 2.5px solid black;

    display: flex;
    align-self:center;
`;

/* VARIANTS */
const aboutVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: [0, 0, 0, 0, 1],
    y: -400,
    transition: {
      duration: 1.5,
      type: 'tween',
    },
  },
};

/* COMPONENT */
function About() {
  /* RENDER */
  return (
    <StyledAbout
      variants={aboutVariants}
      initial="none"
      animate="none"
    />
  );
}

export default About;
