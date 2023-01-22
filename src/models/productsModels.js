const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const [products] = await connection.execute(query);
  return products;
};

const addNewProduct = async ({ name, quantity }) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [newProduct] = await connection.execute(query, [name, quantity]);
  return newProduct;
};

module.exports = {
  getAll,
  addNewProduct,
};
