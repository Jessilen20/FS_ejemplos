import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [descrip, setDescrip] = useState('')

    console.log(id)
    useEffect(() => {
        console.log("Cargando el usuario " + id)
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescrip(res.data.description)
            })

    }, [id])

    return (
        <section>
            <h3>Datos del producto</h3>
            <h3>Detalles de: {title}</h3>
            <h3>Precio: {price}</h3>
            <h3>Descripcion: {descrip}</h3>
        </section>

    );
}

export default ProductDetail;