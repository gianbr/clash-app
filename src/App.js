import './App.css';
import React, { useState } from "react";
import {BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header'
import Main from './components/Layout/Main/Main'


function App() {

    const [menuLinks, setLinksGenerales] = useState(["Aventura", "Fantasia"]);
    const [submenuLinks, setLinksProductos] = useState(["Suspenso", "Infantiles", "Fantasia", "Ciencia ficcion"]);
        
    const handleAdd = () => {

    }


  return (
    <BrowserRouter>
        <Header menuLinks={menuLinks} submenuLinks={submenuLinks}/>
        <Main/>
        {/*<Footer/> */}
    </BrowserRouter>
  );
}

export default App;
