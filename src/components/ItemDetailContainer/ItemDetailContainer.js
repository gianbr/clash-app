import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';


const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([]);

    const arrayProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 4,
                name: "name 4",
                price: 63,
                category: "category 4",
                stock: 56,
                picture: "https://images-na.ssl-images-amazon.com/images/I/41K99+cInvL._SX326_BO1,204,203,200_.jpg",
                description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
            })
        }, 2000);
    });

    useEffect(() => {
        arrayProduct
            .then(response => setProduct(response))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            { product.length === 0 ?
                <p>Cargando producto...</p> :

                <div>
                    <ItemDetail item={product} />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer