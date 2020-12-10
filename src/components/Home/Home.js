import './Home.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';


function Home(){
    return(
        <main className="home">
            <ItemListContainer title="Clash - ePubs" greet="El lugar de tus libros digitales"/>
        </main>
    );
}

export default Home;