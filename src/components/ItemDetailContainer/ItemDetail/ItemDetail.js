import {React, useState} from 'react';
import ItemCount from '../../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import './ItemDetail.css'
import { useCartContext } from "../../../context/cartContext";
import Button from "react-bootstrap/Button";

const ItemDetail = ({item}) => {

    const {addToCart} = useCartContext();
    const [showCounter, setShowCounter] = useState(true);

    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        addToCart({
            cantidad: qty,
            item,
        }, qty)

        setShowCounter(false);
    }

    return (
        <article>
            <div className="detailOverview">
                
                <img src={item.pictureUrl} alt="Imagen_producto" className="itemDetail__img" />
                
                <div className="detailsDescription">
                    <h3>{item.name}</h3>
                    <p className="itemDetail__serial">ID: {item.id}</p>
                    <p>{item.description}</p>
                    <p className="itemDetail__precio" >${item.price}</p>
                    <p>Stock disponible: {item.stock}</p>
                    {
                        showCounter && <ItemCount stock={item.stock} initial={0} onAdd={handleAddProduct} />
                    }
                    {
                        !showCounter && <Link to="/cart"><Button>Terminar compra</Button></Link>
                    }
                    {
                        !showCounter && <Link to='/'><Button>Continuar comprando</Button></Link>
                    }
                </div>
            </div>
        </article>
    )
}

export default ItemDetail