import React from 'react';
import './app.scss';

import {
  Tours,
  About,
  Header,
  Feature,
  Booking,
  StorySection,
} from './components';

const App = () => {
  return (
    <body>
      <Header />
      <About />
      <Feature />
      <Tours />
      <StorySection />
      <Booking />
    </body>
  );
};

export default App;
