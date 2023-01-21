const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const products = await connection.execute(query);
  return products;
};

module.exports = {
  getAll,
};
