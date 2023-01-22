
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Prices from './components/Prices';

function App() {
  return (
    <div>  
      <Header></Header>
      <Navbar></Navbar>  
      <About></About>
      <Shop></Shop>
      <Menu></Menu>
      <Clients></Clients>
      <Prices></Prices>
    </div>
  );
}

export default App;
