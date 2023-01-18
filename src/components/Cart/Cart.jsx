import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import tacho from "../../img/tacho.png";
import ordenGenerada from '../../utilities/ordenGenerada';
import EmptyCart from "../EmptyCart/EmptyCart";
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem, clearCart, totalCart, cartQty } = useContext(Shop)

  const deleteAllHandler = () => clearCart()

  const confirmarOrden = () => {
    const orden = ordenGenerada()
    guardarOrden(cart, orden)
  }

  return (
    <div className="checkout__container">
      {cartQty === 0 ?
        <EmptyCart />
        :
        <>
          <section className="checkout__titulo">
            <h1>Checkout</h1>
            <span>Para finalizar la compra, por favor completá el siguiente formulario con tus datos personales:</span>
          </section>

          <section className="contacto__contenedorform">
            <div className="contacto__contenedorform2">
              <div>
                <div className="container-fluid">
                  <div className="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Nombre y apellido" />
                    <label for="floatingInput">Nombre y Apellido</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Teléfono" />
                    <label for="floatingInput">Teléfono</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="form-floating mb-2">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Confirmar Email</label>
                </div>
              </div>
            </div>
          </section>

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
                  <td><img src={tacho} onClick={() => removeItem(producto)} alt="delete" className="checkout__delete" id={producto.id} title="Borrar producto" /></td>
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

          <section>
            <button onClick={confirmarOrden}>Confirmar compra</button>
          </section>
        </>
      }
    </div>
  )
}

export default Cart