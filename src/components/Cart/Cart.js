import React from 'react'
import {useCartContext} from '../../context/cartContext';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'


const Carrito = () => {
    const {cart, totalQty, removeItem, clearCart} = useCartContext();
    console.log(totalQty);
    return (
        <div className="carrito">
            <h1>Carrito</h1>
            {
                cart.map(product => (
                    <div className="cartDetail">
                        <p><strong>{product.item.name}</strong></p>
                        <img src={product.pictureUrl} alt="Imagen_producto" className="itemDetail__img" />
                        <p>Cantidad: {product.cantidad}</p>
                        <p>Precio por unidad: ${product.item.price}</p>
                        <p>Precio total: ${product.item.price * product.cantidad}</p>
                        <Button onClick={() => removeItem(product.item.id)}>Eliminar item</Button>
                        <hr />
                    </div>
                ))
            }
            {
                cart.length > 0 && <Button className="carrito_vacio" onClick={clearCart}>Vaciar carrito</Button>
            }
            {
                cart.length === 0 && <Link to="/"><Button>Ir a lista de productos</Button></Link>
            }
        </div>
    )
}

export default Carrito