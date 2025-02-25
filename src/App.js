import React from 'react';
import './app.scss';

import { Tours, About, Header, Feature } from './components';

const App = () => {
  return (
    <body>
      <Header />
      <About />
      <Feature />
      <Tours />
    </body>
  );
};

export default App;
