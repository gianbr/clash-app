import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'


const Main = () => {
    return (
        <div>
            
            <Switch>
                <Route path="/" exact>
                    <ItemListContainer/>
                    {/* <Home /> */}
                </Route>
                <Route path="/categorias/:id">
                    <ItemListContainer />
                </Route>
                <Route path="/producto/:id">
                    <ItemDetailContainer />
                </Route>
                {/* <Route path="/Inicio" exact>
                    <Productos />
                    <Home />
                </Route>
                <Route path="/Productos" exact>
                    <Productos />
                </Route>
                <Route path="/Carrito">
                    <Carrito />
                </Route>
                <Route path="/Contacto">
                    <Contacto />
                </Route> */}
            </Switch>
        </div>
    );
};

export default Main;