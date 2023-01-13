import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";



function ItemDetailContainer() {
    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const respuesta = await fetch(`https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis/${params.id}`)
                const data = await respuesta.json()
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        cargarProductos()
    }, [params])


    return (
        <div className="container">
            {productDetail ?
                <ItemDetail products={productDetail} />
                :
                <LoadingComponent/> 
                }
        </div>
    )
}

export default ItemDetailContainer;