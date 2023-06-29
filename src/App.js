import React from 'react';

import Nav from './Component/Nav';

import './App.css';
import "bootstrap/dist/css/bootstrap.css"
// import Home from './Component/Home';
// import Parent from './Component/Parent';
// import Parent2 from './Component/ContextAPI/Parent2';
// import UserProfile from './Component/Axios/UserProfile';
// import Products from './Component/Products';
// import Lifecycle from './Component/Lifecycle';

import Acopmponent from './Component/contextwithFuncComp/Acopmponent';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* < UserProfile /> */}
      {/* < Products /> */}
      {/* <Lifecycle /> */}
      <div className='container'>
        <div className="row">
          <div className="col">
              < Acopmponent />  
          </div>
        </div>
      </div>
      < br />

      {/* < Parent2 /> */}
      <br />
      {/* < Parent /> */}
    </div>
  );
}

export default App;
