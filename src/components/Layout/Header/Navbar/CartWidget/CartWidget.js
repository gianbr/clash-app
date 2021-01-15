import './CartWidget.css';
import React, {useState} from 'react';
import {useCartContext} from '../../../../../context/cartContext'

function CartWidget(){
    const { cart, totalQty, removeItem } = useCartContext();
    const [show, setShow] = useState(false);

    return(
        <div>
            <div className="btn btn-success btn-sm ml-3" onClick={() => setShow(true)}>
                <i className="fa fa-shopping-cart "></i> Carrito <span className="badge badge-light">{totalQty}</span>
            </div>
        </div>
    )
}

export default CartWidget;