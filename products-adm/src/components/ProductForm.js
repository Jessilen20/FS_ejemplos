import React, { useState } from 'react'
import axios from 'axios';

function ProductForm() {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //funcion cuando se envía el formulario
    const crearProducto = async (e) => {
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        await axios.post('http://localhost:8000/api/newproduct', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle("")
        setPrice("")
        setDescription("")
    }
    
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={crearProducto}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;
