const express = require('express');
const routes = express.Router();

const ProductController = require ('./controllers/ProductController');

//rota 1.
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.udpate);
routes.delete('/products/:id', ProductController.destroy);



module.exports = routes;
