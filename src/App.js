
import './App.css';

import AppNavigation from './Utility/RoutingService/AppNavigation';
import Header from './Components/Header/Header';
import React from 'react';
import Imageoverlay from './Components/ImageOverlay/Imageoverlay';
import { useGlobalContext } from './States/GlobalContext/Context';

function App() {

const {isImageLitebox} = useGlobalContext()

  return (
    <div className="App">
     <Header></Header>
      <main className='application-contain'><AppNavigation></AppNavigation>
      {isImageLitebox ? <Imageoverlay></Imageoverlay> : ""}</main>
    </div>
  );
}

export default App;
