import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../ItemListContainer/ItemList/Loader/Loading'

const details = [
    {
        id: "1",
        name: "El Principito",
        pictureUrl: "https://lelibros.online/uploads/2016/04/descargar-libro-el-principito-en-pdf-epub-mobi-o-leer-online.jpg",
        stock: 35,
        price: 2,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "2",
        name: "Harry Potter y la Piedra Filosofal",
        pictureUrl: "https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855652.jpg",
        stock: 55,
        price: 85,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "3",
        name: "Milk and Honey",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/31OihPuS0cL.jpg",
        stock: 0,
        price: 5,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "4",
        name: "Twilight",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/41K99+cInvL._SX326_BO1,204,203,200_.jpg",
        stock: 56,
        price: 63,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "5",
        name: "City of Glass",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_787605-MLA26100692391_092017-O.jpg",
        stock: 54,
        price: 100,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "6",
        name: "Clockwork Princess",
        pictureUrl: "https://m.media-amazon.com/images/I/51upGIRy01L.jpg",
        stock: 19,
        price: 95,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "7",
        name: "Unravel Me",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/51MzulARZjL.jpg",
        stock: 53,
        price: 76,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "8",
        name: "Ignite Me",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/517kOp6qJZL._SX326_BO1,204,203,200_.jpg",
        stock: 0,
        price: 98,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      }
]


const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(details)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItem(res.filter(item=>item.id==id)[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <p>Buscando el producto seleccionado</p>}
        </div>
    )
}

export default ItemDetailContainer