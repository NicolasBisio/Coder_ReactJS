import { useContext } from 'react';
import carritoImg from '../../img/carrito.png'
import { useNavigate } from "react-router-dom";
import { Shop } from '../../context/ShopProvider'


function CartWidget () {
    const {cart, cartQty} = useContext(Shop)

    const navigate = useNavigate()

    const goToCart = () => navigate("/cart")

    return (
        <div>
        <img src={carritoImg} onClick={goToCart} className="carritoImg" alt="carrito"></img>
        {cart.length ? <span className="contenedor__numero--carrito">{cartQty}</span> : <span></span>}
        </div>
    )
}

export default CartWidget;