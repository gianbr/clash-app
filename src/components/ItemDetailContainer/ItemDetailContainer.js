import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { getFirestore } from '../Firebase/firebaseSetup'
import  './ItemDetailContainer.css'
import ReactLoading from 'react-loading'


const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{
        setTimeout(() => {
            const db = getFirestore();
            let query = db.collection("productos").doc(id).get();
            query
                .then((data) => {
                    let datosProductos = data.data();
                    return datosProductos;
                })
                .then((datos) => {
                    setItem({ id: id, ...datos });
                });
        }, 1000);
    },[id])

    return (
        <div>
            {item ? (
                <ItemDetail item={item}/> 
            ):(
               <div className="loading"><ReactLoading type="spin" color="#000"/></div>
            )}
        </div>
    )
}

export default ItemDetailContainer