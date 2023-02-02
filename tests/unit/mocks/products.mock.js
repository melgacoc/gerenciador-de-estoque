const productsList = [
  {
    id: 1,
    name: 'Martelo do Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  },
];

const newProduct = {
  id: 4,
  name: 'Manopla do Infinito'
};

const attProduct = {
  id: 1,
  name: 'Stormbreaker'
};

const delProduct = {
  id: 3,
  name: 'Escudo do Capitão América'
};

const invalidId = {
  affectedRows: 0,
  fieldCount: 0,
  info: "",
  insertId: 0,
  serverStatus: 2,
  warningStatus: 0,
};

const resp = { type: 404, message: 'Product not found' };

module.exports = {
  productsList,
  newProduct,
  attProduct,
  delProduct,
  invalidId,
  resp,
};
