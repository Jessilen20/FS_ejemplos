import { useEffect, useState } from 'react'
import axios from 'axios'

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


function Main() {
    // estado
    const [mensaje, setMensaje] = useState('cargando ...')
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        // se carga el mensaje de prueba
        axios.get('http://localhost:8000/api/')
            .then(res => {
                console.log(res);
                setMensaje(res.data.message)
                setLoaded(true)
            })

    }, []);

    /*
    function eliminarDOM(_id) {
        // la nueva gente es la misma que la antigua gente, menos el con el _id que queremos eliminar
        const newPeople = people.filter(p => p._id !== _id)
        setPeople(newPeople)
        eliminarDOM = { eliminarDOM }
    }
*/
    return (
        <div>
            <h2 className='text-center'>Mensaje <span className='text-danger'>{mensaje}</span></h2>
            <div>
                <ProductForm />
                <hr></hr>
                <div>
                    {loaded === true ?
                        <ProductList /> :
                        'No hay gente todavía!!!!'
                    }
                </div>

            </div>
        </div>
    );
}

export default Main;