const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  res.status(200).json(product);
};

const addNewProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const newProduct = await productsServices.addNewProduct(name, quantity);
    res.status(201).json(newProduct);
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
};