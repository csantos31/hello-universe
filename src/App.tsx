import React from 'react';
import './styles/global.scss'

import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
