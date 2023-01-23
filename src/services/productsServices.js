// const Joi = require('joi');
const productsModel = require('../models/productsModels');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) {
    throw Object.assign(
      new Error('Product not found'),
      { code: 402 },
    );
  }
};

const addNewProduct = async ({ name, quantity }) => {
  const id = await productsModel.addNewProduct(name, quantity);

 // const { erro } = schema.validate({ name, quantity });
 // if (erro) throw { status: 400, message: erro.message };

  return { id, name };
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
};