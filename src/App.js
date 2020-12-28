import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home'
import ItemCount from './components/ItemCount/ItemCount.js';

function App() {

    const handleAdd = () => {

    }


  return (
    <div>
        <Navbar />
        <Home />
      <hr></hr>
        
      {/* <ItemCount onAdd={handleAdd} initialValue={0} maxValue={5} /> */}
    </div>
    
  );
}

export default App;
