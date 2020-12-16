import './ItemCount.css';
import React from 'react';

    const ItemCount = ()=> {
  
        const [contador, setContador] = React.useState(0);
        const [stock, setStock] = React.useState(5);


        const aumentarContador = () => {
            if(contador<6 && stock>0){
            setContador(contador+1);
            setStock(stock-1);
            }else{
            document.getElementById("demo").innerHTML = "No queda stock";
            }
        }

        const restarContador = () => {
            if(contador>0 && stock>0){
                setContador(contador-1);
                setStock(stock+1);
            }else if(contador==5){
                setContador(contador-1);
                setStock(stock+1);
                document.getElementById("demo").innerHTML = "";
            }
        }

        return (
            <div>
                <p> Elementos: {contador} </p>
                <button className = "elemento" onClick = {aumentarContador}> Agregar elemento </button>
                <button className = "elemento" onClick = {restarContador}> Quitar elemento</button>
                <p id="demo"></p>
            </div>

        );
    }

 export default ItemCount;