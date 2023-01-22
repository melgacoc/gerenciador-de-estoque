const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

const addNewProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newProduct = await productsServices.addNewProduct(name, quantity);
    res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  addNewProduct
};