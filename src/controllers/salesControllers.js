const salesService = require('../services/salesServices');

const addNewSale = async (req, res) => {
 // const [{ productId, quantity }] = req.body;
  const params = req.body;
  const sale = params.map((e) => ({
    productId: e.product_id,
    quantity: e.quantity,
  }));
  const newSale = await salesService.addNewSale(sale);
  return res.status(201).json(newSale);
  // fazer loop na service
  // fazer loop pra cadastrar um de cada vez
};

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

module.exports = {
  getAll,
  getSaleById,
  addNewSale,
};