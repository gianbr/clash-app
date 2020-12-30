import './productList.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';


function productList(){
    return(
        <div className="home">
            <ItemListContainer title="Clash - ePubs" greet="El lugar de tus libros digitales"/>
        </div>
    );
}

export default productList;