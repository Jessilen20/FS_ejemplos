import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function Update() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
      axios.get("http://localhost:8000/api/product/" + id)
      .then(res =>{
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
      })
    }, [id])

    function actualizarProducto(ev){
      ev.preventDefault()

      axios.put(
        "http://localhost:8000/api/" + id,
        {
          title,
          price,
          description
        }
      )
      .then(res => {
        alert('Producto fue actualizado')
        navigate("/")
      })
    }

    return (
      <div>
        <form onSubmit={actualizarProducto}>
            <h1>Detalle del producto: {id}</h1>
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
      </div>
        
      );
}

export default Update;