import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home'
import ItemCount from './components/ItemCount/ItemCount.js';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <ItemCount/>
    </div>
    
  );
}

export default App;
