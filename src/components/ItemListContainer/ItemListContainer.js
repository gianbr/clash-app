import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'

const productos = [
    {
        id: "1",
        name: "name 1",
        pictureUrl: "https://m.media-amazon.com/images/I/51x5C4aaEDL.jpg",
        stock: 35,
        price: 2,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "2",
        name: "name 2",
        pictureUrl: "https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855652.jpg",
        stock: 55,
        price: 85,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "3",
        name: "name 3",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/31OihPuS0cL.jpg",
        stock: 0,
        price: 5,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "4",
        name: "name 4",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/41K99+cInvL._SX326_BO1,204,203,200_.jpg",
        stock: 56,
        price: 63,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "5",
        name: "name 5",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_787605-MLA26100692391_092017-O.jpg",
        stock: 54,
        price: 100,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "6",
        name: "name 6",
        pictureUrl: "https://m.media-amazon.com/images/I/51upGIRy01L.jpg",
        stock: 19,
        price: 95,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "7",
        name: "name 7",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/51MzulARZjL.jpg",
        stock: 53,
        price: 76,
        category: "2",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      },
      {
        id: "8",
        name: "name 8",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/517kOp6qJZL._SX326_BO1,204,203,200_.jpg",
        stock: 0,
        price: 98,
        category: "1",
        description: "In et vehicula dui. Proin lacinia urna et suscipit mattis. Donec vestibulum."
      }
]

const ItemListContainer = () => {

    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        
        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItems(res.filter(item=>item.category===id))
            }else{
                setItems(res)
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer


