// import './ItemListContainer.css';
// import ItemList from "./ItemList/ItemList";
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
// import { Link } from "react-router-dom";

// function ItemListContainer ({title, greet}){
//     return(
//         <section class="jumbotron text-center">
//             <div class="container">
//                 <h1 className="title">{title}</h1>
//                 <p className="greet">{greet}</p>
//             </div>
//             <hr></hr>
//             <p className = "prodLista">
//                 Bienvenido a nuestra lista de productos!
//             </p>
//             <div>
//                 <ItemList />
//             </div>
//             <p className="prodDiscount">
//                 Productos en oferta
//             </p>
//             <div>
//                 <ItemDetailContainer />
//             </div>
//         </section>
            
//     );
// }

// export default ItemListContainer;

import React, { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom'
//Components
import ItemList from '../ItemListContainer/ItemList/ItemList'
import Loading from '../ItemListContainer/ItemList/Loading'

const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        const fetchData = fetch('../Products.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
                setLoading(false)
            }, 500);
        })
    }, [])

    return(
        <div className="container">
            { loading ? 
                <Loading /> 
                : data.map((e)=>{ 
                    return( id ? 
                        e.category === id ?
                        <ItemList 
                            key={e.id}
                            id={e.id} 
                            name={e.name}   
                            picture={e.picture} 
                            stock={e.stock} 
                            price={e.price} 
                        /> 
                        : null 
                    : <ItemList 
                        key={e.id}
                        id={e.id} 
                        name={e.name}   
                        picture={e.picture} 
                        stock={e.stock} 
                        price={e.price} 
                    />)
                })
            }
        </div>
    )
}

export default ItemListContainer;




