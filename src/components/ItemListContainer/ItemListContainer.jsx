import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
const URL = "https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis"


function ItemListContainer(props) {

    const [productos, setProductos] = useState(null)

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const respuesta = await fetch(URL)
                const data = await respuesta.json()
                console.log(data)
                setProductos(data)
            } catch (error) {
                console.log("Hubo un error")
            }
        }
        cargarProductos()
    }, [])


    return (
        <div /* className="container" */>
            {productos ?
                <ItemList products={productos} />
                :
                <h1>Cargando...</h1>
            }
        </div>
    )
}

export default ItemListContainer;