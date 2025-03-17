import React from 'react';
import './app.scss';

import {
  Tours,
  About,
  Popup,
  Header,
  Footer,
  Feature,
  Booking,
  NavMenu,
  StorySection,
} from './components';

const App = () => {
  return (
    <body>
      <NavMenu />
      <Header />
      <About />
      <Feature />
      <Tours />
      <StorySection />
      <Booking />
      <Footer />
      <Popup />
    </body>
  );
};

export default App;
