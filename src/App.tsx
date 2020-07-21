/* IMPORTS */
import React, { useState } from 'react';

import { useViewportScroll } from 'framer-motion';

/* COMPONENT */
function App() {
  const { scrollY } = useViewportScroll();
  const [pageY, setPageY] = useState(scrollY.get());
  scrollY.onChange(() => {
    setPageY(scrollY.get());
  });
  /* RENDER */
  return (
    <h1 id="app">
      Page Y :
      {' '}
      {pageY}
    </h1>
  );
}

export default App;
