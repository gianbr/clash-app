import React, {useState} from 'react';
import './ItemCount.css';
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';

function ItemCount({ stock, initial, onAdd }) {
    
    const [contador, setContador] = useState(initial);
    
    const agregar = () => {
        if (contador >= initial && contador < stock) {
            setContador(contador + 1);
        }
    }
    const quitar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div className="counter">
                
                <Button disabled={contador===0} onClick={quitar} className="botonAccion"><Dash size={20} /></Button>
                <p>Cantidad: {contador} </p>
                <Button disabled={contador==stock} onClick={agregar} className="botonAccion"><Plus size={20} /></Button>
            </div>
            <Button disabled={stock===0 || contador===0} onClick={(e) => onAdd(e, contador)} className="agregar">Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;