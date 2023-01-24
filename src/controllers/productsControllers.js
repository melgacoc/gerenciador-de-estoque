const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const products = await productsServices.getAll();
   return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  if (product.length === 0) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product[0]);
};

const addNewProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productsServices.addNewProduct(name);
    res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
};