import React from "react";
import './Item.css'

function Item(props) {
  return (
    <div className="item">
        <div>
            <h5>{props.nombre}</h5>
            <ul>
                <li>Precio: {props.precio}</li>
                <li>Categoría {props.categoria}</li>
            </ul>
            <hr />
        </div>
    </div>
  );
}

export default Item;