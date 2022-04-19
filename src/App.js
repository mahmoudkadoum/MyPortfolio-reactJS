import { useState, useEffect, useRef } from "react";
import { Navigate, Route, Routes} from 'react-router-dom';
import { Home, Skills , AboutUs, Gallery, ContactMe, Navbar} from './components';
import './App.css';
import './CSS/font-awesome.min.css';
import './CSS/animation.css';



const App = () => {
  const logo = useRef();
return (
  <div>
    <Navbar logoRef={logo} />
    <Routes>
      <Route exact path="/" element={<Home logoRef={logo} />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/contactme" element={<ContactMe />} />
      <Route exact path="/redirect" element={<Navigate to="/" />} />
      </Routes>
  </div>
)
};

export default App;
