import React from 'react';

import Nav from './Component/Nav';

import './App.css';
import "bootstrap/dist/css/bootstrap.css"
// import Home from './Component/Home';
// import Parent from './Component/Parent';
import Parent2 from './Component/ContextAPI/Parent2';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      < br />
      
      < Parent2 />
    
      <br />
      {/* < Parent /> */}
    </div>
  );
}

export default App;
