import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const cargarMasivo = async () => {
    const response = await fetch("https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis")
    const productosAGuardar = await response.json();

    productosAGuardar.forEach(async (producto) => {
        const docRef = await addDoc(collection(db, "products"), {
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            detail: producto.detail,
            category: producto.category,
            stock: producto.stock
        });
        console.log("Document written with Id:", docRef.id)
        });
}

export default cargarMasivo