/* IMPORTS */
import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

/* STYLES */
const StyledTextContent = styled(motion.span)`
  position:fixed;
  width:100px;
  height:100px;

  padding:100px;
  margin:25px;
  border:2.5px solid black;

  background:yellow;

  color:black;

  z-index:100;
`;

const initVariants = {
  initial: {
    fontSize: 5,
  },
  animate: {
    fontSize: 20,
    transition: {
      when: 'beforeChildren',
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
  scaleUp: {
    scale: 1.5,
    transition: {
      type: 'tween',
      when: 'afterChildren',
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const advVariants = {
  initial: {
    fontSize: 5,
  },
  animate: {
    fontSize: 20,
    color: 'red',
  },
};

/* COMPONENT */
function Intro() {
  return (
    <StyledTextContent
      variants={initVariants}
      initial="initial"
      animate="animate"
    >
      Hello world
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
      <motion.span variants={advVariants}> Child element</motion.span>
    </StyledTextContent>
  );
}

export default Intro;
