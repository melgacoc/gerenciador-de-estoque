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

const deleteSale = async (id) => {
  const sale = await salesModels.getSaleById(id);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };

  const delSale = await salesModels.deleteSale(id);
  return delSale;
};

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
  deleteSale,
};