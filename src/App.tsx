/* IMPORTS */
import React, { useEffect } from 'react';

import { useViewportScroll } from 'framer-motion';

/* COMPONENT */
function App() {
  const { scrollYProgress, scrollY } = useViewportScroll();
  scrollYProgress.onChange(() => {
    console.log('hello world');
  });
  scrollY.onChange(() => {
    console.log('hello world');
  });
  /* RENDER */
  return (
    <div>Hello world</div>
  );
}

export default App;
