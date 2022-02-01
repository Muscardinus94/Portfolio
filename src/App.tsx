import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from 'components/Header/App';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Header />;
}

export default App;
