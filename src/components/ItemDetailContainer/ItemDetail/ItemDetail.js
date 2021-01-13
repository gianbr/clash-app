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
                </div>
            </div>
        </article>
    )

    // const {name, pictureUrl, description, price, stock, id} = item
    // const initial = 0
    // let [currentStock, setStock] = useState(item.stock)
    // let [count, setCount] = useState(initial)
    // let [added, setAdded] = useState(false)
    

    // const handleIncrement = () => {
    //     if (count < stock) {
    //         setCount(++count);
    //         setStock(--currentStock)
    //     }
    // }
    // const handleDecrement = () => {
    //     if (count > initial) {
    //         setCount(--count)
    //         setStock(currentStock + 1)
    //     };
    // }

    // const onAdd = () => {
    //     if (count <= stock) {
    //         setAdded(true)
    //     }
    // }


    // return(
    //     <>
            
    //         <div className="detailOverview">
    //             <img alt={id} src={pictureUrl} />
    //             <div className="detailsDescription">
    //             <h3>{name}</h3>
    //                 <h2>$ {price}</h2>
    //                 <p>{description}</p>
    //                 <p>Disponibles: {currentStock}</p>
    //                 {added?
    //                     <Link 
    //                         className='btn btn-primary'
    //                         to={`/cart`}
    //                     >Finalizar compra</Link>
    //                     : <ItemCount 
    //                     count={count}
    //                     currentStock={stock} 
    //                     initial={initial} 
    //                     handleDecrement={handleDecrement}
    //                     handleIncrement={handleIncrement}
    //                     onAdd={onAdd}
    //                 />
    //                 }

    //             </div>
    //         </div>
    //     </>
    // )
}

export default ItemDetail