import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

//import axios from 'axios';

function ProductList() {
    const [listaProductos, setListaProductos] = useState([{}]);

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get("http://localhost:8000/api/all").then(result => {
            console.log(result.data.products);
            setListaProductos(result.data.products);
        });
    }, []);

    return (
        <div>
            <h3>hola</h3>
            <div>
                {
                    listaProductos.map((item) => {
                        return <div >
                            <p><strong>Nombre el producto:</strong><Link to={"/" + item._id}>{item.title}</Link></p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;