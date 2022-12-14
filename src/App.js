import logo from './logo.svg';
import './App.css';

import AppNavigation from './Utility/RoutingService/AppNavigation';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <AppNavigation></AppNavigation>
    </div>
  );
}

export default App;
