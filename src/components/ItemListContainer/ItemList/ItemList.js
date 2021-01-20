import React from 'react'
import Item from './Item/Item'
import './ItemList.css'
import ReactLoading from 'react-loading'


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
                :(
                    <div className="loading"><ReactLoading type="spin" color="#000"/></div>
                )}
            </div>
        </div>
    )
}

export default ItemList
