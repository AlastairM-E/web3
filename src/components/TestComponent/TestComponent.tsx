/* IMPORTS */
import React, { useState } from 'react';

import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledTestComponent = styled(animated.div)`
  border: 2.5px solid black;
  color: black;
  border-radius: 100%;
  text-align: center;
  width: 25px;
  height:25px;
  padding: 25px;
  margin: 5px;
`;

/* COMPONENT */
function TestComponent() {
  const [isRight, setIsRight] = useState(false);
  const startingColour = !isRight ? 'white' : 'yellow';
  const finishingColour = isRight ? 'yellow' : 'white';
  const startingMargin = !isRight ? '0px' : '100px';
  const finishingMargin = isRight ? '100px' : '0px';

  const props = useSpring({

    backgroundColor: startingColour,
    marginLeft: startingMargin,
    marginRight: finishingMargin,

    from: {
      backgroundColor: finishingColour,
      marginLeft: finishingMargin,
      marginRight: startingMargin,
    },

  });
  /* RENDER */
  return (
    <StyledTestComponent onClick={() => setIsRight(!isRight)} style={props} />
  );
}

export default TestComponent;
