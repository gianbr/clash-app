import React from 'react'
import Item from './Item/Item'
import Loading from './Loader/Loading'
import './ItemList.css'


const ItemList = ({items}) => {
    return(
        <div>
            <div className="itemTitulo">
                <h1>Nuestros Productos</h1>
            </div>
            <div className="row productList">
                {items.length > 0
                ? items.map(item=>{
                    return (
                        <div className="itemList">
                            <Item key={item.id} id={item.id} name={item.name} price={item.price} pictureUrl={item.pictureUrl}/>
                        </div>
                    )
                })
                : <p>Buscando productos, por favor espere</p>}
            </div>
        </div>
    )
}

export default ItemList
