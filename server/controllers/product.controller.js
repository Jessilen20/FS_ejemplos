const product = require('../models/product.model');

//mensaje de prueba
module.exports.mensaje = (req, res) => {
    res.json({ message: 'Saludos desde el Servidor' })
}

//obtener todos los chistes
module.exports.obtenerTodosProductos = async (req, res) => {
    const products = await product.find()
    res.json({ products: products })
}

//crear un chiste
module.exports.crearProducto = (req, res) => {
    const { title, price, description } = req.body;
    product.create({
        title,
        price,
        description
    })
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//buscarv un producto
module.exports.obtenerUnProducto = async (req, res) => {
    const id = req.params.id
    const productn = await product.findOne({ _id: id })
    res.json(productn)
}

//eliminar un product
module.exports.eliminar = async (req, res) => {
    const id = req.params.id
    try {
        const productDel = await product.deleteOne({ _id: id })
        return res.json({ eliminado: 'ok' })
    }
    catch (error) {
        console.log(error)
        return res.json(error, 400)
    }
}

//actualizar un producto
module.exports.actualizar = async (req, res) => {
    const id = req.params.id
    const { title, price, description } = req.body

    try {
        await product.findOneAndUpdate(
            { _id: id }, // criterio de búsqueda
            { $set: { title: title, price: price, description: description} }  // fijamos los nuevos valores
        )
        return res.json({ hola: 'chao' })
    }
    catch (error) {
        return res.json(error, 400)
    }

}