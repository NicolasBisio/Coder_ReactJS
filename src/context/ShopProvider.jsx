import React, { createContext, useEffect, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalCart, setTotalCart] = useState([0])
    const [cartQty, setCartQty] = useState([0])

    useEffect(() => {
        setCartQty(cart.reduce((acc, producto) => acc + producto.quantity, 0))
    }, [cart])

    useEffect(() => {
        setTotalCart(cart.reduce((acc, producto) => acc + (producto.precio * producto.quantity), 0))
    }, [cart])

    const addItem = (producto, cantidad) => {
        const productoRepetido = isInCart(producto)

        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, { ...producto, quantity: cantidad }])
        }
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

    const removeItem = (producto) => {
        const productosFiltrados = cart.filter(elemento => elemento.id !== producto.id)
        setCart(productosFiltrados)
    }

    const clearCart = () => setCart([])

    return (
        <Shop.Provider value={{ addItem, cart, removeItem, clearCart, totalCart, cartQty }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider