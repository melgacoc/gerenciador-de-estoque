const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

const addNewProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
};
