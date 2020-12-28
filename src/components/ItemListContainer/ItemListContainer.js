import './ItemListContainer.css';
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

function ItemListContainer ({title, greet}){
    return(
        <section class="jumbotron text-center">
            <div class="container">
                <h1 className="title">{title}</h1>
                <p className="greet">{greet}</p>
            </div>
            <hr></hr>
            <p className = "prodLista">
                Bienvenido a nuestra lista de productos!
            </p>
            <div>
                <ItemList />
            </div>
            <p className="prodDiscount">
                Productos en oferta
            </p>
            <div>
                <ItemDetailContainer />
            </div>
        </section>
            
    );
}

export default ItemListContainer;




