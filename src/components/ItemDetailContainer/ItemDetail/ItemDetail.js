import React from 'react';
import ItemCount from '../../ItemCount/ItemCount'



const ItemDetail = ({item}) => {

    return (
        <div className="container">
            <img src={item.pictureUrl} alt="carousel"/>
            <h3>{item.name} - ${item.price}</h3>
            <p>{item.description}</p>
            <ItemCount initialValue={0} maxValue={item.stock}/>
        </div>
    )
}

export default ItemDetail