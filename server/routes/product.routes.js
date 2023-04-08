const ProductsController = require("../controllers/product.controller");

module.exports = function(app){
    app.get('/api/',ProductsController.mensaje);
    app.get('/api/all', ProductsController.obtenerTodosProductos);
    app.post('/api/newproduct', ProductsController.crearProducto);
    app.get('/api/product/:id',ProductsController.obtenerUnProducto);
    app.delete('/api/eliminar/:id', ProductsController.eliminar);
    app.put('/api/:id',ProductsController.actualizar)
}