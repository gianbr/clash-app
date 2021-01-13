import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/Layout/Header/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import CartProvider from './context/cartContext'

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
            <NavBar/> 
            <main>
                <Switch>

                    <Route path="/" exact>
                        <ItemListContainer/> 
                    </Route>

                    <Route path="/category/:id">
                        <ItemListContainer/> 
                    </Route>

                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                </Switch>
            </main>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
