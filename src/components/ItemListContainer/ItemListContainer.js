import './ItemListContainer.css';
import ItemList from "./ItemList/ItemList";

function ItemListContainer ({title, greet}){
    return(
        <section class="jumbotron text-center">
            <div class="container">
                <h1 className="title">{title}</h1>
                <p className="greet">{greet}</p>
            </div>
            <hr></hr>
            <p>
                Bienvenido a nuestra lista de productos!
            </p>
        </section>
            
    );
}

export default ItemListContainer;



