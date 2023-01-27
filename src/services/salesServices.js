const salesModels = require('../models/salesModels');

const getAll = async () => {
  const sales = await salesModels.getAll();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  return sale;
};

const addNewSale = async (productId, quantity) => {
  const sale = await salesModels.addNewSale(productId, quantity);
  return sale;
};

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
};