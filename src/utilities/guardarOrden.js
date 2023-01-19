import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import swal from "sweetalert";

const guardarOrden = (cart, orden) => {
    console.log("Guardar orden");
    console.log(cart);
    console.log(orden);

    const batch = writeBatch(db)

    const outOfStock = []

    cart.forEach((productoEnCart) => {
        getDoc(doc(db, "products", productoEnCart.id))
            .then(async (documentSnapshot) => {
                const producto = { ...documentSnapshot.data(), id: documentSnapshot.id }
                if (producto.stock >= productoEnCart.quantity) {
                    batch.update(doc(db, "products", producto.id), {
                        stock: producto.stock - productoEnCart.quantity
                    })
                } else {
                    outOfStock.push(producto)
                }
                console.log("Productos fuera de stock:")
                console.log(outOfStock)

                if (outOfStock.length === 0) {
                    addDoc(collection(db, "orders"), orden).then(({ id }) => {
                        batch.commit().then(() => {
                            swal("¡Muchas gracias por su compra!", "Se generó la order con Id: " + id, "success");
                        })
                    }).catch((err) => {
                        console.log(`Error: ${err.message}`)
                    })

                } else {
                    swal("Producto fuera de stock", "", "error")
                }

            })
    })
}

export default guardarOrden