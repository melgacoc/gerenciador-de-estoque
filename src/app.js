const express = require('express');
const productsControllers = require('./controllers/productsControllers');
const nameValidation = require('./Validation/nameValidation');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar 
app.get('/', (_request, response) => {
  response.send();
});
app.get('/products', productsControllers.getAll);
app.get('/products/:id', productsControllers.getProductById);
app.use(express.json());
app.post('/products', nameValidation.nameValidation, productsControllers.addNewProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;