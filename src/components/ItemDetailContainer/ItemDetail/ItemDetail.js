import React from 'react';
//Boostrap
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../../ItemCount/ItemCount'



const ItemDetail = ({detail: {name, picture, category, description, price, stock, id}}) => {
    return(
        <>
            <h3>{name}</h3>
            <div className="detailOverview">
                <img alt={id} src={picture} />
                <div className="detailsDescription">
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>$ {price}</p>
                    <Counter stock={stock} initial={1} />
                    <Button>Sumar al Carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail