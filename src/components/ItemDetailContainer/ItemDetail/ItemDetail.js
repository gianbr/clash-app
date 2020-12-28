import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    return (
        <div className="itemDetail">
            <h3>{item.name}</h3>
            <p className="itemID">ID de producto {item.id}</p>
            <img src={item.picture} alt=""/>
            <p >$ {item.price}</p>
            <p className="itemDesc">{item.description}</p>
            <p className="itemStock" >Stock: {item.stock} disponibles</p>
            <button className="addCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail