import React from 'react';

import Nav from './Component/Nav';

import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Home from './Component/Home';
import Parent from './Component/Parent';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />

      <br />
      {/* < Parent /> */}
      
    </div>
  );
}

export default App;
