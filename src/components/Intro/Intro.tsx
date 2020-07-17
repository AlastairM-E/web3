/* IMPORTS */
import React from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

/* STYLES */
const StyledTextContent = styled(motion.span)`
    color:black;
`;

/* COMPONENT */
function Intro() {
  const { scrollX } = useViewportScroll();
  console.log({ scrollX });
  /* RENDER */
  return (
    <StyledTextContent>Hi, my name is Alastair</StyledTextContent>
  );
}

export default Intro;
