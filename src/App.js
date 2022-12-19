
import './App.css';

import AppNavigation from './Utility/RoutingService/AppNavigation';
import Header from './Components/Header/Header';
import React from 'react';
import Imageoverlay from './Components/ImageOverlay/Imageoverlay';
import { useGlobalContext } from './States/GlobalContext/Context';
import Footer from './Components/Footer/Footer';

function App() {

const {isImageLitebox} = useGlobalContext()

  return (
    <div className="App">
     <Header></Header>
      <main className='application-contain'><AppNavigation></AppNavigation>
      {isImageLitebox ? <Imageoverlay></Imageoverlay> : ""}</main>
    <Footer></Footer>
    </div>
  );
}

export default App;
