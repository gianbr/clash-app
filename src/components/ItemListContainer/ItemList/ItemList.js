import React from 'react'
import Item from './Item/Item'
import Loading from './Loader/Loading'


const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.length > 0
            ? items.map(item=>{
                return (
                    <Item key={item.id} id={item.id} name={item.name} price={item.price} pictureUrl={item.pictureUrl}/>
                )
            })
            : <Loading/>}
        </div>
    )
}

export default ItemList
