import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import CartWidget from './CartWidget/CartWidget.js';
import Logo from '../Logo/Logo'

let NavBar = ({ menuLinks, submenuLinks }) => {
    return(
        <nav id="NavBar" className=" navbar-expand-md  bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navResponsive"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                    <NavLink to="/" exact>
                        <Logo/>
                    </NavLink>
                    
                    <ul className="navbar-nav m-auto">
                        <li>
                            <NavLink to="/category/1" className="black-text">Aventura</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/2" className="black-text">Fantasia</NavLink>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="Realizar busqueda"></input>
                            <div className="input-group-append">
                                <button type="button" class="btn btn-secondary btn-number">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;