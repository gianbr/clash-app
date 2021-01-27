import React from 'react'
import {useCartContext} from '../../context/cartContext';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import './Cart.css'

const Carrito = () => {
    const {cart, totalPrice, removeItem, clearCart} = useCartContext();

    return (
        <div className="carrito">
            <h1>Carrito</h1>
            {
                cart.length > 0 ?
                <div className="carritoContenedor">
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className="carritoDetalle card">
                                <p><strong>{product.item.name}</strong></p>
                                <img src={product.item.pictureUrl}/>
                                <p>Cantidad: {product.cantidad}</p>
                                <p>Precio por unidad: ${product.item.price}</p>
                                <p>Precio total: ${product.item.price * product.cantidad}</p>
                                <Button onClick={() => removeItem(product.item.id, product.item.price * product.cantidad, product.cantidad)}>Eliminar producto</Button>
                            </div>
                        )
                    })}
                    <p><strong>Precio total: ${totalPrice}</strong></p>
                    {cart.length > 0 && <Button className="carritoVacio" onClick={clearCart}>Vaciar carrito</Button>}
                    <Link to="/checkout" className="carrito_final">Terminar compra</Link>
                </div> :
                <>
                    <div className="carritoVacioMensaje">
                        <p>El carrito está vacío</p>
                        <Link to="/" className="carritoVacioBoton"><Button>Ir a productos</Button></Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Carrito