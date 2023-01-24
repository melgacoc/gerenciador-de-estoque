const Joi = require('joi');
const productsModel = require('../models/productsModels');

const productNameSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  return product;
};

const addNewProduct = async (name) => {
  const { erro } = productNameSchema.validate(name);
  if (erro) {
    return { type: 'INVALID_VALUE', message: '"name" lenght must be at least 5 characters long' };
  }
  const id = await productsModel.addNewProduct(name);
  return { id, name };
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
};