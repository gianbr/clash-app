import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//Components
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../ItemListContainer/ItemList/Loading'


const ItemDetailContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams()
    

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
            }, 600);
        })
    }, [])
    
    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((e)=>{
                    return(
                        e.id === params.id ? 
                        <ItemDetail 
                            key={e.id}
                            detail={{
                                    id: e.id,
                                    name : e.name,
                                    picture : e.picture,
                                    category : e.category,
                                    description : e.description,
                                    price : e.price,
                                    stock : e.stock,

                            }}
                        /> :
                        null
                    )
                })
            }
        </div>
    )

}

export default ItemDetailContainer