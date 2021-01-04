import './CartWidget.css';

function CartWidget(){
    return(
        <a className="btn btn-success btn-sm ml-3" href="cart.html">
            <i className="fa fa-shopping-cart"></i> Carrito 
            <span className="badge badge-light numItems">0</span>
        </a>
    )
}

export default CartWidget;