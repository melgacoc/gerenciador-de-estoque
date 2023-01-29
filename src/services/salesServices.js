const salesModels = require('../models/salesModels');

const getAll = async () => {
  const sales = await salesModels.getAll();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  return sale;
};

const addNewSale = async (sale) => {
  const id = await salesModels.addNewSale(sale);
  // const newSale = await salesModels.addNewSale(sale);
  return { id, sale };
};

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
};