import { useState, useContext } from 'react';
import { getFirestore } from '../Firebase/firebaseSetup'
import {useCartContext} from '../../context/cartContext'
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import './Checkout.css'
import firebase from "firebase/app";
import "firebase/firestore";


const Checkout = () => {
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const {cart, clearCart, totalPrice} = useCartContext();
    const [orderId, setOrderId] = useState();


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            date: firebase.firestore.FieldValue.serverTimestamp(),
            items: cart,
            total: totalPrice
        }

        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection.add(datosCompra)
        .then(({id}) => {
            clearCart();
            setOrderId(id);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(console.log(datosCompra));

    }

    return (
        <>
            {
                orderId ?
                    <>
                        <section className="compraRealizada">
                            <h2>Compra realizada con exito!</h2>
                            <p>Tu numero de orden es: <strong>{orderId}</strong> </p>
                            <Link to="/" className="carritoVacioBoton"><Button>Ir a productos</Button></Link>
                        </section>
                    </>

                    :
                    <section className="checkout">
                        <div className="containerCheckout">
                            <h1>Datos de compra</h1>

                            <form onSubmit={manejarCompra} className="formCheckout">
                                <div>
                                    <p>Nombre y Apellido:</p>
                                    <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Telefono:</p>
                                    <input value={telefono} onChange={(e) => { setTelefono(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Correo Electrónico:</p>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required/>
                                </div>
                                <button type="submit">Comprar</button>
                            </form>
                        </div>
                    </section>
            }
        </>
    )
}

export default Checkout;