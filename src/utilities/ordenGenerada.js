const ordenGenerada = (cliente, tel, email, cart, total) => {
    return {
        buyer: {
        nombre: cliente,
        telefono: tel,
        email: email
    },
    item: cart,
    total: total,
    createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada