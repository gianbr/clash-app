import {React, useState} from 'react';
import ItemCount from '../../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({item}) => {

    const {name, pictureUrl, description, price, stock, id} = item
    const initial = 0
    let [currentStock, setStock] = useState(item.stock)
    let [count, setCount] = useState(initial)
    let [added, setAdded] = useState(false)
    

    const handleIncrement = () => {
        if (count < stock) {
            setCount(++count);
            setStock(--currentStock)
        }
    }
    const handleDecrement = () => {
        if (count > initial) {
            setCount(--count)
            setStock(currentStock + 1)
        };
    }

    const onAdd = () => {
        if (count <= stock) {
            setAdded(true)
        }
    }


    return(
        <>
            
            <div className="detailOverview">
                <img alt={id} src={pictureUrl} />
                <div className="detailsDescription">
                <h3>{name}</h3>
                    <h2>$ {price}</h2>
                    <p>{description}</p>
                    <p>Disponibles: {currentStock}</p>
                    {added?
                        <Link 
                            className='btn btn-primary'
                            to={`/cart`}
                        >Finalizar compra</Link>
                        : <ItemCount 
                        count={count}
                        currentStock={stock} 
                        initial={initial} 
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        onAdd={onAdd}
                    />
                    }

                </div>
            </div>
        </>
    )
}

export default ItemDetail