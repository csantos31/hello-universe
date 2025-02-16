import React from 'react';
import './styles/global.scss'

import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Contact/>
      <Projects/>
    </div>
  );
}

export default App;
