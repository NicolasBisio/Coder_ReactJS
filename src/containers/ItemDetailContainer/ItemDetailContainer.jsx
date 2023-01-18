import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { db } from "../../firebase/config";

function ItemDetailContainer() {
    const [productDetail, setProductDetail] = useState({})

    const params = useParams()
    
    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const docRef = doc(db, "products", params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const productDetail = { id: docSnap.id, ...docSnap.data() }
                    setProductDetail(productDetail)
                } else {
                    console.log("No such document!");
                }

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
                <LoadingComponent />
            }
        </div>
    )
}

export default ItemDetailContainer;