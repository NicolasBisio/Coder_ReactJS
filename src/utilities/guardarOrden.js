import { doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const guardarOrden = (cart, orden) => {
    const batch = writeBatch(db)

    const outOfStock = []

    cart.forEach((productoEnCart) => {
        getDoc(doc(db,"products", productoEnCart.id))
        .then(async (documentSnapshot) => {
            const producto = (...documentSnapshot.data(), id: documentSnapshot.id)
            if (producto.stock>= productoEnCart.quantity) {
                batch.update(doc(db, "products", producto.id), {
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
            console.log("Productos fuera de stock:")
            console.log(outOfStock)

            )}
    });
}