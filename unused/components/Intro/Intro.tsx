/* IMPORTS */
import React, { Fragment } from 'react';

import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

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

const textContentVariant = {
  yellow: { background: 'yellow' },
  lightgreen: { background: 'lightgreen' },
  lightblue: { background: 'lightblue' },
  coral: { background: 'coral' },
};

/* COMPONENT */
function Intro() {
  const differentAnimations = [
    'yellow',
    'lightgreen',
    'lightblue',
    'coral',
  ];
  const [animation, cycleAnimation] = useCycle(...differentAnimations);
  return (
    <>
      <button onClick={() => cycleAnimation()}> cycleAnimation</button>
      <StyledTextContent
        drag
        dragConstraints={{
          left: 50, top: 50, right: 50, bottom: 50,
        }}
        dragElastic={2}
        variants={textContentVariant}
        animate={animation}
      >
        Hello world
      </StyledTextContent>
    </>
  );
}

export default Intro;
