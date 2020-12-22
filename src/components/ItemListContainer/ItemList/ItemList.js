import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import './ItemList.css'

function ItemList(props) {
    const [items, setItems] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        fetch("https://5fe210857a94870017681f38.mockapi.io/products")
          .then(response => {
            return response.json();
          })
          .then(data => {
            setItems(data);
          });
      }, 2000);
    }, []);
  
    return (
      <div>
        <div className= "listaProductos">
            {items ? 
            items.map((i, index) => (
                <Item
                key={index}
                nombre={i.name}
                precio={i.price}
                categoria={i.category}
                />
            ))
            : (
            <p className="textoCarga">Solicitando informacion a la base de datos</p>
            )}
        </div>
      </div>
    );
  }
  export default ItemList;