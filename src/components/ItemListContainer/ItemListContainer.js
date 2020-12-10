import './ItemListContainer.css';

function ItemListContainer ({title, greet}){
    return(
        <section class="jumbotron text-center">
        <div class="container">
            <h1 className="title">{title}</h1>
            <p className="greet">{greet}</p>
        </div>
        </section>
    );
}

export default ItemListContainer;




