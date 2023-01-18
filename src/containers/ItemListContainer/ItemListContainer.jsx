import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import ItemList from "../../components/ItemList/ItemList";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import "./ItemListContainer.css";
import { db } from "../../firebase/config";
import cargarMasivo from "../../utilities/cargarMasivo";


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams()
    console.log(params);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                /* cargarMasivo()     */            
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    productos.push({ id: doc.id, ...doc.data() })
                });

                setProductos(productos)
                setProductosFiltrados(productos)

            } catch (error) {
                console.log("Hubo un error")
            }
        }
        cargarProductos()
    }, [])

    useEffect(() => {
        if (params?.categoryId) {
            const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
            setProductosFiltrados(productosFiltrados)
        } else {
            setProductosFiltrados(productos)
        }
    }, [params, productos])

    return (
        <div className="container body">
            {productos ?
                <ItemList products={productosFiltrados} />
                :
                <LoadingComponent />
            }
        </div>
    )
}

export default ItemListContainer;