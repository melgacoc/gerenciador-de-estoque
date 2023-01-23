const Joi = require('joi');
const productsModel = require('../models/productsModels');
//a

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().required(),
});

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};


module.exports = {
  getAll,
  //getProductById,
  //addNewProduct,
};