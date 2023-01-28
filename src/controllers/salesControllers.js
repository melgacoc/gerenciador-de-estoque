const salesService = require('../services/salesServices');

const getAll = async (req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSaleById(id);
  if (sale.length === 0) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

const addNewSale = async (req, res) => {
  const [{ productId, quantity }] = req.body;
  const newSale = await salesService.addNewSale(productId, quantity);
  return res.status(201).json(newSale);
};

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
};