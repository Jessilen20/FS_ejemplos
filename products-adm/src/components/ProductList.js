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

    //elimnarDOM
    /*
    function eliminarDOM(_id) {
        // la nueva gente es la misma que la antigua gente, menos el con el _id que queremos eliminar
        const newproduct = listaProductos.filter(p => p._id !== _id)
        setListaProductos(newproduct)
    }
*/

    //funcion eliminar

    function eliminar(_id) {
        const seguro = window.confirm('¿Seguro que deseas eliminar esta persona?')
        if (seguro === false) {
            return
        }
        axios.delete('http://localhost:8000/api/eliminar/' + _id)
            .then(() => {
                alert('El producto ha sido eliminada')
                //eliminarDOM(_id)
            })
    }

    return (
        <div>
            <h3>hola</h3>
            <div>
                {
                    listaProductos.map((item) => {
                        return <div >
                            <p><strong>Nombre el producto:</strong><Link to={"/" + item._id}>{item.title}</Link></p>
                            <button onClick={() => eliminar(item._id)}> Eliminar</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;