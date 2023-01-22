const productsModel = require('../models/productsModel');
const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().required(),
});

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const addNewProduct = async ({ name, quantity }) => {
  const id = await productsModel.addNewProduct(name, quantity);

  const { erro } = schema.validate({ name, quantity });
  if (erro) throw { status: 400, message: erro.message}

  return {id , name };
};

module.exports = {
  getAll,
  addNewProduct
};