import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider'
import tacho from "../../img/tacho.png";
import guardarOrden from '../../utilities/guardarOrden';
import ordenGenerada from '../../utilities/ordenGenerada';
import EmptyCart from "../EmptyCart/EmptyCart";
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem, clearCart, totalCart, cartQty } = useContext(Shop)
  const [error, setError] = useState(null)
  const clienteFormRef = useRef(undefined)
  const telFormRef = useRef(undefined)
  const emailFormRef = useRef(undefined)
  const emailFormRef2 = useRef(undefined)

  const deleteAllHandler = () => clearCart()

  const terminarCompra = (event) => {
    event.preventDefault();
    const cliente = clienteFormRef.current.value;
    const tel = telFormRef.current.value;
    const email = emailFormRef.current.value;
    const email2 = emailFormRef2.current.value;

    if (!cliente) {
      return setError("Por favor, ingresá tu nombre")
    }

    if (!tel) {
      return setError("Por favor, ingresá tu teléfono")
    }

    if (!email) {
      return setError("Por favor, ingresá tu email")
    }

    if (!email2) {
      return setError("Por favor, ingresá tu email")
    }

    if (email !== email2) {
      return setError("Los emails ingresados no coinciden")
    }

    const orden = ordenGenerada(cliente, tel, email, cart, totalCart)
    guardarOrden(cart, orden)
    clearCart();
    navigate("/")
  }

  const navigate = useNavigate();

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

          <div className="contenedor__error">
            <form
              className="contacto__contenedorform">
              <div className="contacto__contenedorform2">
                <div>
                  <div className="container-fluid">
                    <div className="form-floating mb-2">
                      <input ref={clienteFormRef} type="text" class="form-control" id="floatingInput" placeholder="Nombre y apellido" />
                      <label for="floatingInput">Nombre y Apellido</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input ref={telFormRef} type="text" class="form-control" id="floatingInput" placeholder="Teléfono" />
                      <label for="floatingInput">Teléfono</label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="form-floating mb-2">
                    <input ref={emailFormRef} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input ref={emailFormRef2} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Repetir Email</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="contenedor__error2">
              <span className="error_validacion"> {error}</span>
            </div>
          </div>

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
            <button className="btn btn-detail" onClick={terminarCompra}>Confirmar compra</button>
          </section>
        </>
      }
    </div>
  )
}

export default Cart