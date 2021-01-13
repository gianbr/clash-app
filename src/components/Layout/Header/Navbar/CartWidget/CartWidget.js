import './CartWidget.css';

function CartWidget(){
    return(
        <div className="btn btn-success btn-sm ml-3">
            <i className="fa fa-shopping-cart"></i> Carrito 
            <span className="badge badge-light numItems">0</span>
        </div>
    )
}

export default CartWidget;