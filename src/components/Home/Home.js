import './Home.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';


function Home(){
    return(
        <div className="home">
            <ItemListContainer title="Clash - ePubs" greet="El lugar de tus libros digitales"/>
        </div>
    );
}

export default Home;