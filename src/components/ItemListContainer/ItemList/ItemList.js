import React from 'react'
import { Link } from 'react-router-dom'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../../ItemCount/ItemCount';

const ItemList = ({name, stock, price, picture, id}) => {
    return(
        <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    $ {price}
                </Card.Text>
                <Link to={`/producto/${id}`}>Detalle</Link>
                <Counter 
                    initial={1}
                    stock={stock}
                />
            </Card.Body>
        </Card>
    )
}

export default ItemList
        // <>
        //     {product.length === 0 ? <p>Buscando en base de datos...</p> : null}
        //     { product.map((item) => {
        //         return (
        //             <>
        //                 <div className="itemList">
        //                     <img scr={item.picture} alt="" />
        //                     <Link to={"itemdetail/" + item.id}></Link>
        //                     <h3>{item.name}</h3>
                            
        //                     <p>${item.price}</p>
        //                     <p className="itemStock" >Stock: {item.stock} disponibles</p>
        //                     <p className="itemID">ID de producto {item.id}</p>
        //                 </div>
        //             </>
        //         )
        //     })
        //     }
        // </>
//     );
// }

// export default ItemList;