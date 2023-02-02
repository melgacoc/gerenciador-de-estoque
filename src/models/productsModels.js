const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

const addNewProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

const attProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name =? WHERE id =?';
  const newProduct = await connection.execute(query, [name, id]);

  return newProduct;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id= ?';
  const [product] = await connection.execute(query, [id]);

  return product;
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
  attProduct,
  deleteProduct,
};
