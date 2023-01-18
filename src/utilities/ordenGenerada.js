const ordenGenerada = (nombre, telefono, cart, total) => {
    return {
        buyer: {
        nombre: nombre,
        telefono: telefono,
    },
    item: cart,
    total: total,
    createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada