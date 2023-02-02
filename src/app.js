const express = require('express');
const productsControllers = require('./controllers/productsControllers');
const salesControllers = require('./controllers/salesControllers');
const nameValidation = require('./Validation/nameValidation');
const salesValidation = require('./Validation/salesValidation');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar 
app.get('/', (_request, response) => {
  response.send();
});
app.use(express.json());
app.get('/products', productsControllers.getAll);
app.get('/sales', salesControllers.getAll);
app.get('/products/:id', productsControllers.getProductById);
app.get('/sales/:id', salesControllers.getSaleById);
app.post('/products', nameValidation.nameValidation, productsControllers.addNewProduct);
app.post('/sale', nameValidation.nameValidation,
  salesValidation.idValidation,
  salesValidation.quantityValidation,
  salesControllers.addNewSale);
app.put('/products/:id', nameValidation.nameValidation, productsControllers.attProduct);
app.delete('/products/:id', productsControllers.deleteProduct);
app.delete('/sales/:id', salesControllers.deleteSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;