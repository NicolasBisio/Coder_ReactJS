import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import tacho from "../../img/tacho.png";
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem, clearCart, totalCart } = useContext(Shop)

  const deleteAllHandler = () => clearCart()

  return (
    <div className="checkout__container">
      <table>
        <thead>
          <tr>
            <td>PRODUCTO</td>
            <td className="checkout__columna--nombre">NOMBRE</td>
            <td>CANTIDAD</td>
            <td>PRECIO UNITARIO</td>
            <td>TOTAL</td>
            <td>QUITAR</td>
          </tr>
        </thead>
        {cart.map(producto => {
          return <tbody className="checkout__tbody" key={producto.id}>
            <tr>
              <td><img src={producto.imagen} alt={producto.imagen} className="checkout__imagen" /></td>
              <td className="checkout__columna--nombre">{producto.nombre}</td>
              <td>{producto.quantity}</td>
              <td>$ {producto.precio}</td>
              <td>$ {producto.precio * producto.quantity}</td>
              <td><img src={tacho} onClick={()=> removeItem(producto)} alt="delete" className="checkout__delete" id={producto.id} title="Borrar producto" /></td>
            </tr>
          </tbody>
        })}
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>TOTAL</th>
          <th>$ {totalCart}</th>
          <th><img src={tacho} onClick={deleteAllHandler} alt="delete" class="checkout__deleteall" title="Borrar todo" /></th>
        </tr>`
      </table>
    </div>
  )
}


export default Cart