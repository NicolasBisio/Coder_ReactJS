import { useContext } from 'react';
import carritoImg from '../../img/carrito.png'
import { useNavigate } from "react-router-dom";
import { Shop } from '../../context/ShopProvider'


function CartWidget () {
    const {cart} = useContext(Shop)

    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }

    return (
        <div>
        <img src={carritoImg} onClick={goToCart} className="carritoImg" alt="carrito"></img>
        {cart.length && <span className="contenedor__numero--carrito">{cart.length}</span>} 
        </div>
    )
}

export default CartWidget;