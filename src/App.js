import React from 'react';
import './app.scss';

import { Tours, About, Header, Feature, StorySection } from './components';

const App = () => {
  return (
    <body>
      <Header />
      <About />
      <Feature />
      <Tours />
      <StorySection />
    </body>
  );
};

export default App;
