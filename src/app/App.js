import React, { useState } from 'react';
import './App.css';
// Import components here
import { Landing } from '../features/Landing/Landing.js';
import { About } from '../features/About/About.js';
import { Testimonials } from '../features/Testimonials/Testimonials.js';
import { Donuts } from '../features/Donuts/Donuts.js';
import { Cart } from '../features/Cart/Cart.js';
import { Footer } from '../features/Footer/Footer.js';

function App() {

  // set to display popup after customer hits order button
  const [display, setDisplay] = useState('none');

  return (
    <div className="App" >
      <Landing />
      <About />
      <Testimonials />
      <Donuts 
        display={display}
      />
      <Cart 
        display={display}
        setDisplay={setDisplay}
      />
      <Footer />
    </div>
  );
}


export default App;
