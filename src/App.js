import React from 'react';
import { Home, Skills , AboutUs, Gallery, ContactMe} from './container';
import './App.css';
import './CSS/font-awesome.min.css';
import './CSS/animation.css';



const App = () => (
  <div>
    <Home />
    <AboutUs />
    <Skills />
    <Gallery />
    <ContactMe />
  </div>
);

export default App;
