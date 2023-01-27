const connection = require('./connection');

const getAll = async () => {
  // const query1 = 'SELECT * FROM StoreManager.sales.products';
  const query = 'SELECT sale_id AS saleId, date, product_id AS productId, quantity '
    + 'FROM StoreManager.sales_products AS a '
    + 'INNER JOIN StoreManager.sales AS b ON b.id = a.sale_id';
  const [sales] = await connection.execute(query);
  return sales;
};

const getSaleById = async (id) => {
  const query = 'SELECT date, product_id AS productId, quantity '
    + 'FROM StoreManager.sales_products AS a '
    + 'INNER JOIN StoreManager.sales AS b ON a.sale_id = b.id '
    + 'WHERE ? = a.sale_id';
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

const addNewSale = async (productId, quantity) => {
  const query = 'INSERT INTO StoreManager.sales_products WHERE product_id=? VALUES (?)';
  const newSale = await connection.execute(query, [productId, quantity]);
  return newSale;
};

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
};