import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
const URL = "https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis"


function ItemListContainer(props) {
    const [productos, setProductos] = useState(null)

    const { categoryId } = useParams()

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const respuesta = await fetch(URL)
                const data = await respuesta.json()
                const dataFiltrada = data.filter(el => el.category === categoryId)
                if (categoryId) {
                    setProductos(dataFiltrada)
                }
                else {
                    setProductos(data)
                }
            } catch (error) {
                console.log("Hubo un error")
            }
        }
        cargarProductos()
    }, [categoryId])


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