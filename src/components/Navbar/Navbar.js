import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md  bg-dark">
            <div className="container">
                <a className=" logo" href="index.html">Clash</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product.html">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product.html">Carrito</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contacto</a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Realizar busqueda"></input>
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary btn-number">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;