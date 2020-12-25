import React, { useState, useEffect } from 'react';
import { prodDetail } from './Products'
import './ItemList.css';

const ItemList = () => {
    let [product, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(prodDetail);
            });
            promise.then(prodDetail => {
                setItem(prodDetail);
            })
        }, 2000)
    }, [])
    return (
        <>
            {product.length === 0 ? <p>Buscando en base de datos...</p> : null}
            { product.map((item) => {
                return (
                    <>
                        <div className="itemList">
                            <img scr={item.picture} alt="" />
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <p className="itemStock" >Stock: {item.stock} disponibles</p>
                            <p className="itemID">ID de producto {item.id}</p>
                        </div>
                    </>
                )
            })
            }
        </>
    );
}

export default ItemList;