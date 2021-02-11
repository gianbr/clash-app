import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import './ItemListContainer.css'
import {getFirestore } from '../Firebase/firebaseSetup'

const ItemListContainer = () => {

    const [items,setItems] = useState([])
    const {id, subid} = useParams()

    useEffect(()=>{
        let aux = [];
        setItems(false);

        setTimeout(() => {
            const db = getFirestore();
            if (id === undefined && subid === undefined) {
                const query = db.collection("productos").get();

                query
                    .then((res) => {
                        console.log(res);
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        setItems(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else if (typeof id === "string" && subid === undefined) {
                const query = db
                    .collection("productos")
                    .where("category", "==", `${id}`)
                    .get();

                query
                    .then((res) => {
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        setItems(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else if (typeof id === "string" && typeof subid === "string") {
                const query = db
                    .collection("productos")
                    .where("type", "==", `${subid}`)
                    .get();

                query
                    .then((res) => {
                        res.docs.forEach((doc) => {
                            let item = { id: doc.id, ...doc.data() };
                            aux.push(item);
                        });
                        setItems(aux);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }, 1000);
    },[id, subid])

    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer